import { Box, Container, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/authContext';
import { ContractContext } from '../context/contractContext';

function DoctorDiagnosisPage() {
    const [reports, setReports] = useState([])
    const contractContext = useContext(ContractContext);
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    const checkifDoctor = async () => {
      const checkifDoctor = await authContext.checkIfDoctor(
        contractContext.account
      );
      if (!checkifDoctor) {
        toast.error("Only a Doctor can access this page");
        navigate("/dashboard/getProfiles");
      }
    };

    const getPatientAccessListForDoctor = async () => {
        const accessList = await authContext.getPatientAccessListForDoctor(contractContext.account)
        await authContext.getReports()
        const reports2 = authContext.reports;
        for (var i = 0; i < accessList.length; i++) {
            for(var j = 0;j < reports2.length;j++){
                if (reports2[j]?.patientid === accessList[i]) {
                  setReports([...reports, reports2[j]]);
                }
            }
        }
 
    };

    useEffect(() => {
      checkifDoctor();
      getPatientAccessListForDoctor();
      // eslint-disable-next-line
    }, []);
  return (
    <Box
      style={{
        width: "100vw",
        height: "91vh",
        spacing: 0,
        justify: "space-around",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            backgroundColor: "#facf5a",
            flexDirection: "column",
          }}
        >
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
            List of Reports Available to Diagnose
          </Typography>
          <Divider />
          <Grid container>
            <Box sx={{ p: "1rem" }}>
              {reports.length > 0 && (
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Patient Id</TableCell>
                        <TableCell align="right">Patient's Name</TableCell>
                        <TableCell align="right">Gender</TableCell>
                        <TableCell align="right">Blood Group</TableCell>
                        <TableCell align="right">Date Of Birth</TableCell>
                        <TableCell align="right">Has Diabetes?</TableCell>
                        <TableCell align="right">Hospital Name</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {reports.length > 0 &&
                        reports.map((report) => (
                          <TableRow key={report.patientid}>
                            <TableCell component="th" scope="row">
                              {report.patientid}
                            </TableCell>
                            <TableCell align="right">
                              {report.PatientName}
                            </TableCell>
                            <TableCell align="right">{report.gender}</TableCell>
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
              )}
            </Box>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default DoctorDiagnosisPage