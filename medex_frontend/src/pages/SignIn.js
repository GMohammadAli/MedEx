import {
  Box,
  Button,
  Container,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import Image from "../components/Image";

function SignIn() {
  return (
    <Box>
      <Grid
        container
        //direction="column-reverse"
      >
        {/* Image Section */}
        <Image src="/signin.png" width="80%" />
        <Grid item md={6} style={{ display: "flex", padding: "5rem" }}>
          <Container
            maxWidth="xs"
            style={{ justifyContent: "center", alignContent: "center" }}
          >
            <Box>
              <Typography
                variant="h5"
                component="h1"
                gutterBottom
                style={{ textAlign: "center" }}
              >
                Welcome to
                <Typography
                  component="b"
                  variant="h5"
                  color="secondary"
                  style={{ display: "inline", fontWeight: "600" }}
                >
                  {" "}
                  Lenxt
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
                  color="secondary"
                  size="md"
                  variant="contained"
                  fullWidth
                  disableElevation
                  //   disabled
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
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <a href="forgotPassword">Forgot Password?</a>
                  </Grid>
                  <Grid item xs={8}>
                    <a href="/SignUp">Don't have an account? Sign Up</a>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SignIn;
