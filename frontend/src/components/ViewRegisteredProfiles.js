import { Box, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { ContractContext } from "../context/contractContext";

function ViewPatients() {
    const authContext = useContext(AuthContext)
    const contractContext =  useContext(ContractContext)

   const rowsDoctors = [
    ...authContext.doctors
   ];
   const rowsPatients = [...authContext.patients];
   const rowsDiagnosticCenters = [...authContext.diagnosticCenters];
   const rowsReports = [...authContext.reports];

    useEffect(() => {
      const loadProfileData = async () => {
        const contract = contractContext.medEx;
        await authContext.getPatients(contract);
        console.log(authContext.patients);
        await authContext.getDoctors(contract);
        await authContext.getDiagnosticCenters(contract);
        await authContext.getReport(contract);
      };

      loadProfileData();
      // eslint-disable-next-line
    }, [])

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 4, mb: 4 }}
      style={{ background: "#FFF4CF" }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box sx={{ p: "1rem" }}>
            {authContext.patients !== [] && (
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
                  Doctors
                </Typography>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Doctor Id</TableCell>
                        <TableCell align="right">Doctor's Name</TableCell>
                        <TableCell align="right">Specialization</TableCell>
                        <TableCell align="right">Hospital Name</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rowsDoctors.map((doctor) => (
                        <TableRow key={doctor.DocId}>
                          <TableCell component="th" scope="row">
                            {doctor.DocId}
                          </TableCell>
                          <TableCell align="right">{doctor.DocName}</TableCell>
                          <TableCell align="right">{doctor.Doc_spec}</TableCell>
                          <TableCell align="right">{doctor.Hos_Name}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            )}
          </Box>
          <Box sx={{ p: "1rem" }}>
            {authContext.patients && (
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#facf5a",
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
                  Patients
                </Typography>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Patient Id</TableCell>
                        <TableCell align="right">Patient's Name</TableCell>
                        <TableCell align="right">Gender</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rowsPatients.map((patient) => (
                        <TableRow key={patient.patientid}>
                          <TableCell component="th" scope="row">
                            {patient.patientid}
                          </TableCell>
                          <TableCell align="right">
                            {patient.PatientName}
                          </TableCell>
                          <TableCell align="right">{patient.gender}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            )}
          </Box>
          <Box sx={{ p: "1rem" }}>
            {authContext.diagnosticCenters && (
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
                  Diagnostic Centers
                </Typography>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Lab Id</TableCell>
                        <TableCell align="right">Lab Name</TableCell>
                        <TableCell align="right">Doctor's Name</TableCell>
                        <TableCell align="right">Hospital Name</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rowsDiagnosticCenters.map((dc) => (
                        <TableRow key={dc.lab_id}>
                          <TableCell component="th" scope="row">
                            {dc.lab_id}
                          </TableCell>
                          <TableCell align="right">{dc.Lab_name}</TableCell>
                          <TableCell align="right">
                            {dc.reco_doc_name}
                          </TableCell>
                          <TableCell align="right">
                            {dc.reco_hospitalname}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            )}
          </Box>
          <Box sx={{ p: "1rem" }}>
            {authContext.reports && (
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#facf5a",
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
                  Reports
                </Typography>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Patient Id</TableCell>
                        <TableCell align="right">Patient's Name</TableCell>
                        <TableCell align="right">Gender</TableCell>
                        <TableCell align="right">Report Type</TableCell>
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
                          <TableCell align="right">{report.Doc_name}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ViewPatients;
