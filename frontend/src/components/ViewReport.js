import { Box, Container, Grid, Link, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

function ViewReport() {
  const { reportUrl } = useContext(AuthContext);
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" gutterBottom>
              View Reports
            </Typography>
            <Box component="div">
              <Link href={reportUrl} underline="always">
                {reportUrl}
              </Link>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ViewReport;
