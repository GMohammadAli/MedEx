import { Box, Grid, Paper, Typography, Container, CardContent, Card, CardMedia, Button } from '@mui/material'
import React, { useContext, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

function AccessPage() {
    const authContext = useContext(AuthContext)

    useEffect(() => {
      const getDoctorsList = async () => {
        await authContext.getDoctors();
        console.log(authContext.doctors);
      }

      getDoctorsList();
    }, []);

    const provideAccess = async (doctorId) => {
      await authContext.giveAccess(doctorId);
    }

    
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
        {/* {aut !== "undefined" && ( */}
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
            List of Doctors
          </Typography>
          <Grid container>
            {authContext.doctors.map((doctor) => (
              <Grid item md={4} style={{ display: "flex", padding: "3rem" }}>
                <Card sx={{ maxWidth: 345, borderRadius: "20px" }}>
                  <CardMedia
                    component="img"
                    height="234"
                    image="/Images/Doctor.png"
                    alt="/Images/Doctor.png"
                  />
                  <CardContent
                  // onClick={() => {
                  //   navigate(`/signUp/${profileTitle}`);
                  // }}
                  >
                    <Typography
                      variant="body1"
                      color="text.primary"
                      style={{ textAlign: "center" }}
                    >
                      Doctor {doctor.DocName}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      style={{ textAlign: "center" }}
                    >
                      Specialization- {doctor.Doc_spec}
                    </Typography>
                  </CardContent>
                  <Button
                    type="button"
                    style={{ backgroundColor: "red" }}
                    size="medium"
                    onClick={() => provideAccess(doctor.DocId)}
                    variant="contained"
                    disableElevation
                    sx={{ m: 1, ml: 4, mr: 4 }}
                  >
                    Provide Access
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
        {/* )} */}
      </Container>
    </Box>
  );
}

export default AccessPage