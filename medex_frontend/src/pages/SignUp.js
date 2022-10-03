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
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useParams } from "react-router-dom";

function SignUp() {
  const params = useParams()
  return (
    <Box>
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          padding: "5rem",
          margin:"1rem"
        }}
        maxWidth="md"
        sx={{ border: 1, borderRadius: "16px" }}
      >
      <Container>
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
                fontWeight: "600"
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
            Create an Account for {params.profile}
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
              // color="secondary"
              style={{ backgroundColor: "#277BC0" }}
              size="lg"
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
    </Box>
    </Box>
    </Box>
  );
}

export default SignUp;
