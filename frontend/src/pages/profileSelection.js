import React, { useState } from 'react'
import Card from "../components/Card"
import { Box, Grid, TextField, Typography } from "@mui/material";

function ProfileSelection() {
  const [formData, setFormData] = useState({
    username:"",
    emailAddress: ""
  })
  const { username, emailAddress } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
      // style={{
      //   width: "100vw",
      //   height: "91vh",
      //   spacing: 0,
      //   justify: "space-around",
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
      >
        <Box
          style={{
            padding: "4rem",
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
          <TextField
            label="Username"
            variant="outlined"
            color="secondary"
            fullWidth
            id="username"
            required
            value={username}
            onChange={onChange}
            sx={{ m: 1 }}
          />
          <TextField
            label="Email Address"
            variant="outlined"
            color="secondary"
            id="emailAddress"
            fullWidth
            required
            value={emailAddress}
            onChange={onChange}
            sx={{ m: 1 }}
          />
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
              <Card
                profileTitle="Doctor"
                imgSrc="Images/Doctor.png"
                formData={formData}
              />
            </Grid>
            <Grid item md={4} style={{ display: "flex", padding: "3rem" }}>
              <Card profileTitle="Patient" imgSrc="Images/Patient.png" />
            </Grid>
            <Grid item md={4} style={{ display: "flex", padding: "3rem" }}>
              <Card
                profileTitle="Diagnostic Center"
                imgSrc="Images/Diagnostic_Center.png"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileSelection;
