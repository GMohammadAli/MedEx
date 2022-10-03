import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "../components/Image";
import LockOpenIcon from "@mui/icons-material/LockOpen";

function SignUp() {
  return (
    <Box>
      <Grid
        container
        //direction="column-reverse"
      >
        <Grid item md={6} style={{ display: "flex", padding: "5rem" }}>
          <Container
            maxWidth="s"
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
                  MedEx
                </Typography>
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                style={{ textAlign: "center" }}
              >
                Create an Account
              </Typography>
              <Box component="form" action="/" method="GET">
                <TextField
                  label="Full Name"
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  required
                  sx={{ m: 1 }}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  required
                  sx={{ m: 1 }}
                />
                <TextField
                  label="Contact Number"
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  required
                  sx={{ m: 1 }}
                />
                <TextField
                  label="Country"
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
                  endIcon={<LockOpenIcon />}
                  sx={{ m: 1 }}
                >
                  REGISTER
                </Button>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultUnchecked color="secondary" />}
                    label="Show Password"
                    sx={{ m: 1 }}
                  />
                </FormGroup>
                <Grid container>
                  <Grid item xs={4}></Grid>
                  <Grid item xs={8}>
                    <a href="/SignIn">Already have an account? Sign In</a>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </Grid>
        {/* Image Section */}
        <Image src="/signup.png" />
      </Grid>
    </Box>
  );
}

export default SignUp;
