import { Box, Button, Container, Grid, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/authContext";
import { ContractContext } from "../context/contractContext";
import generatePDF from "../services/reportGenerator";

function ViewReport() {
  const { reportUrl, getReports } = useContext(AuthContext);
  const authContext = useContext(AuthContext);
  const contractContext = useContext(ContractContext);
  const [ prediction, setPrediction] = useState(1);

  const { reports, setReports} = useContext(AuthContext)
  const navigate = useNavigate();
  const rowsReports = [...reports];

  const predictClaim = async (patientAddress) => {
    const predictedValue = await authContext.getPrediction(patientAddress);
    setPrediction(parseInt(predictedValue));
  };

  const checkifPatient = async () => {
    const checkIfPatient = await authContext.checkIfPatient(
      contractContext.account
    );
    if (!checkIfPatient) {
      toast.error("Only Patient can access this page");
      navigate("/");
    }
  };

  const getReportsForPage = async () => {
    await getReports(contractContext.medEx);
    // eslint-disable-next-line array-callback-return
    const report = reports.filter((report) => {
      if(report.patientid === contractContext.account) return report
    })
    setReports(report)
  };

  const reportDownload = async (patientId) => {
    await generatePDF(reports, patientId);
  };

  useEffect(() => {
    checkifPatient(); 
    getReportsForPage();
    // eslint-disable-next-line
  }, [contractContext.account]);


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
                          <TableCell align="right">Hospital Name</TableCell>
                          <TableCell align="right">Download Your Report?</TableCell>
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
                              {report.Hos_name}
                            </TableCell>
                            <Box
                              sx={{
                                p: 2,
                                display: "flex",
                                alignItems: "column",
                                justifyContent: "center",
                              }}
                            >
                              <Button
                                onClick={() => {
                                  reportDownload(report.patientId);
                                }}
                              >
                                Download Report
                              </Button>
                            </Box>
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
            <Box
              sx={{
                p: 2,
                display: "flex",
                alignItems: "column",
                justifyContent: "center",
              }}
            >
              {prediction === 1 ? (
                <Button
                  onClick={() => {
                    predictClaim(contractContext.account);
                  }}
                >
                  Insurance Claim Prediction
                </Button>
              ) : (
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
                  You Can Apply upto Rs.{prediction} of Insurance Claim
                </Typography>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}


export default ViewReport;
