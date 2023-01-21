import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Card from "../components/Card"

function profileSelection() {
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
      <Box
        style={{
          padding: "5rem",
        }}
        maxWidth="md"
        sx={{ border: 1, borderRadius: "16px" }}
      >
        <Typography
          component="h5"
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", color: "#277BC0" }}
          fontWeight={500}
        >
          Login Page
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          gutterBottom
          sx={{ textAlign: "center" }}
        >
          Choose the Account Type
        </Typography>
        <Grid container>
          <Grid item md={4} style={{ display: "flex", padding: "3rem" }}>
            <Card profileTitle="Doctor" imgSrc="/Doctor.png" />
          </Grid>
          <Grid item md={4} style={{ display: "flex", padding: "3rem" }}>
            <Card profileTitle="Patient" imgSrc="/Patient.png" />
          </Grid>
          <Grid item md={4} style={{ display: "flex", padding: "3rem" }}>
            <Card
              profileTitle="Diagnostic Center"
              imgSrc="/Diagnostic_Center.png"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default profileSelection
