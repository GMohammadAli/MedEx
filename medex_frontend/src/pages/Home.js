import { Grid, Typography, Button, Box, Container } from "@mui/material";
import Image from "../components/Image";
// import { makeStyles } from "@mui/styles";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import report from "./report.jpeg";

function Home() {
  return (
    <Box>
      <Grid container>
        <Grid
          item
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "5rem",
            justifyContent: "center",
          }}
        >
          <Container
            maxWidth="xs"
            style={{ justifyContent: "center", alignContent: "center" }}
          >
            <Typography variant="h4" gutterBottom>
              Welcome to MedEX
            </Typography>
            <Typography variant="subtitle1" component="div" gutterBottom>
              MedEx stands for Medical Exchange which means information exchange
              of medical reports. It aims to securely share patients’
              information such as their medical history and health-related
              issues.
            </Typography>
            <Button
              type="submit"
              style={{ marginTop: "10px" }}
              color="secondary"
              href="/signUp"
              variant="contained"
              size="md"
              endIcon={<KeyboardArrowRightIcon />}
            >
              Get Started
            </Button>
          </Container>
        </Grid>
        {/* Image Section */}
        <Image src={report} />
      </Grid>
    </Box>
  );
}

export default Home;
