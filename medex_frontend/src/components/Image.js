import React from "react";
import { Grid } from "@mui/material";

function Image({src , width}) {
  return (
    <Grid item md={6} style={{ display: "flex" }}>
      <img src={src} alt="background_image" style={{ width: width }} />
    </Grid>
  );
}

export default Image;
