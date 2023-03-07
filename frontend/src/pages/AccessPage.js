import { Box, Grid, Paper, Typography, Container, Divider } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import DoctorCard from '../components/DoctorAccessCard';
import { AuthContext } from '../context/authContext';
import { ContractContext } from '../context/contractContext';

function AccessPage() {
  const contractContext = useContext(ContractContext);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const checkifPatient = async () => {
    const checkIfPatient = await authContext.checkIfPatient(
      contractContext.account
    );
    if (!checkIfPatient) {
      toast.error("Only a Patient can access this page");
      navigate("/dashboard/getProfiles");
    }
  };

  useEffect(() => {
    checkifPatient();
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
            List of Doctors Available
          </Typography>
          <Divider />
          <Grid container>
            {authContext.doctors.map((doctor) => (
              <Grid item md={4} style={{ display: "flex", padding: "3rem" }} key={doctor}>
                <DoctorCard doctor={doctor} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default AccessPage