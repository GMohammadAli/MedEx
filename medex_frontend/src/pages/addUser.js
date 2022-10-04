import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function AddUser() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" gutterBottom>
                Verify Account
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="fathersName"
                    name="fathersName"
                    label="Fathers Name"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="mothersName"
                    name="mothersName"
                    label="Mothers Name"
                    fullWidth
                    autoComplete="shipping address-line1"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    label="Place Of Birth"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Specilization"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    label="Date of birth"
                    fullWidth
                    autoComplete="shipping postal-code"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    label="YOE"
                    fullWidth
                    autoComplete="shipping country"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    label="Age"
                    fullWidth
                    autoComplete="shipping country"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    label="State Name"
                    fullWidth
                    autoComplete="shipping country"
                    variant="standard"
                  />
                </Grid>
              </Grid>
              <Typography
                style={{ fontSize: "17px" }}
                variant="h5"
                marginTop="30px"
                marginBottom="10px"
                color="red"
                gutterBottom
              >
                Documents Required*
              </Typography>
              <Grid item xs={12}>
                <Button variant="contained" component="label">
                  Upload Aadhar Card
                  <input type="file" hidden />
                </Button>
                <Button
                  style={{ marginLeft: "20px" }}
                  variant="contained"
                  component="label"
                >
                  Upload Pan Card
                  <input type="file" hidden />
                </Button>
                <Button
                  style={{ marginLeft: "20px" }}
                  variant="contained"
                  component="label"
                >
                  Degree Certification
                  <input type="file" hidden />
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  style={{ marginTop: "40px" }}
                  variant="contained"
                  component="label"
                >
                  Submit
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
