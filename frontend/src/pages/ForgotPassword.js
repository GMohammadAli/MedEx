import {
  Box,
  Typography,
  Container,
  Button,
  TextField,
} from "@mui/material";
import React from "react";

function ForgotPassword() {
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
                    style={{ backgroundColor: "#277BC0" }}
                    size="md"
                    variant="contained"
                    fullWidth
                    disableElevation
                    disabled
                    sx={{ m: 2 }}
                  >
                    FIND USER
                  </Button>
                  <Box style={{textAlign:"center"}}> <a href="/SignUp/Patient">Don't have an account? Sign Up </a></Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default ForgotPassword;
