import { Box, Button, Container, Grid, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { ContractContext } from "../context/contractContext";

function ViewReport() {
  const { reportUrl, getReport } = useContext(AuthContext);
  const contractContext = useContext(ContractContext);

  const { reports } = useContext(AuthContext)
  const navigate = useNavigate();
  const rowsReports = [...reports];
  useEffect(() => {
    const getReports = async () => {
      await getReport(contractContext.medEx);
    };
    getReports();
    // eslint-disable-next-line
  }, []);
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography
              component="h1"
              variant="h4"
              color="#277BC0"
              style={{
                display: "inline",
                fontWeight: "600",
                margin: "1rem",
              }}
            >
              Your Reports
            </Typography>
            {/* <Box component="div" sx={{ mt: 4, mb: 4 }}>
              X-Ray Report:-
              <Link href={reportUrl} underline="always">
                {reportUrl}
              </Link>
            </Box> */}
            <Box sx={{ p: "1rem" }}>
              {reports.length !== 0 && (
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#facf5a",
                  }}
                >
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Patient Id</TableCell>
                          <TableCell align="right">Patient's Name</TableCell>
                          <TableCell align="right">Gender</TableCell>
                          <TableCell align="right">Report Type</TableCell>
                          <TableCell align="right">Blood Group</TableCell>
                          <TableCell align="right">Date Of Birth</TableCell>
                          <TableCell align="right">Has Diabetes?</TableCell>
                          <TableCell align="right">Hospital Name</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rowsReports.map((report) => (
                          <TableRow key={report.patientid}>
                            <TableCell component="th" scope="row">
                              {report.patientid}
                            </TableCell>
                            <TableCell align="right">
                              {report.PatientName}
                            </TableCell>
                            <TableCell align="right">{report.gender}</TableCell>
                            <TableCell align="right">
                              <Link href={reportUrl} underline="always">
                                {report.Doc_name}
                              </Link>
                            </TableCell>
                            <TableCell align="right">
                              {report.Bloodgrp}
                            </TableCell>
                            <TableCell align="right">{report.DOB}</TableCell>
                            <TableCell align="right">
                              {report.diabetes.toString()}
                            </TableCell>
                            <TableCell align="right">
                              {report.Hos_name}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Button
                    sx={{ m: "1rem" }}
                    onClick={() => {
                      navigate("/dashboard/access");
                    }}
                  >
                    Give Report Access to Doctors?
                  </Button>
                </Paper>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ViewReport;
