import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  TextField,
} from "@mui/material";
import React from "react";

function ForgotPassword() {
  return (
    <Box>
      <Grid container style={{ display: "flex", padding: "6rem" }}>
        <Container
          maxWidth="xs"
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Box>
            <Box sx={{}}>
              <Typography
                variant="h5"
                component="h1"
                style={{ textAlign: "center" }}
              >
                Reset Password
              </Typography>
              <Typography
                variant="body1"
                component="h4"
                style={{ textAlign: "center" }}
              >
                Check Your mail to Reset Password
              </Typography>
              <Box component="form" action="/" method="GET">
                <TextField
                  label="Email Address"
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  required
                  sx={{ m: 2 }}
                />
                <Button
                  type="submit"
                  color="secondary"
                  size="md"
                  variant="contained"
                  fullWidth
                  disableElevation
                //   disabled
                  sx={{ m: 2 }}
                >
                  FIND USER
                </Button>
                <Grid container spacing={1}>
                  <Grid item xs={5}></Grid>
                  <Grid item xs={7}>
                    <a href="/SignUp">Don't have an account? Sign Up</a>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Container>
      </Grid>
    </Box>
  );
}

export default ForgotPassword;
