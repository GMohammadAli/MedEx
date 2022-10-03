import {
  Box,
  Button,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";

function SignIn() {
  return (
    <Box>
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
          <Box>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              style={{ textAlign: "center" }}
            >
              Welcome to
              <Typography
                component="h1"
                variant="h4"
                color="#277BC0"
                style={{
                  display: "inline",
                  fontWeight: "600",
                }}
              >
                {" "}
                MedEx
              </Typography>
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              style={{ textAlign: "center" }}
            >
              Sign in to your Account
            </Typography>
            <Box component="form" action="/" method="GET">
              <TextField
                label="Email Address"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                sx={{ m: 1 }}
              />
              <TextField
                label="Password"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                sx={{ m: 1 }}
              />
              <Button
                type="submit"
                style={{ backgroundColor: "#277BC0" }}
                size="md"
                variant="contained"
                fullWidth
                disableElevation
                disabled
                endIcon={<LoginIcon />}
                sx={{ m: 1 }}
              >
                Sign In
              </Button>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultUnchecked color="secondary" />}
                  label="Show Password"
                  sx={{ m: 1 }}
                />
              </FormGroup>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <a href="/forgotPassword">Forgot Password?</a>
                </Grid>
                <Grid item xs={8}>
                  <a href="/SignUp/Patient">Don't have an account? Sign Up</a>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SignIn;
