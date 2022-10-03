import { Grid, Typography, Button, Box, Container } from "@mui/material";
import Image from "../components/Image";
// import { makeStyles } from "@mui/styles";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Home() {
  return (
    <Box
      style={{
        width: "94vw",
        height: "82vh",
        spacing: 0,
        justify: "space-around",
        padding:"2rem"
      }}
    >
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
              Welcome to MedEx
            </Typography>
            <Typography variant="subtitle1" component="div" gutterBottom>
              MedEx stands for Medical Exchange which means information exchange
              of medical reports. It aims to securely share patient's
              information such as their medical history and health-related
              issues.
            </Typography>
            <Button
              type="submit"
              style={{ marginTop: "10px", backgroundColor: "#277BC0" }}
              color="secondary"
              href="/profile"
              variant="contained"
              size="md"
              endIcon={<KeyboardArrowRightIcon />}
            >
              Get Started
            </Button>
          </Container>
        </Grid>
        {/* Image Section */}
        <Image src="/report.png" width="90%" />
      </Grid>
    </Box>
  );
}

export default Home;
