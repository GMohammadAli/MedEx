import React from "react";
import { Grid } from "@mui/material";

function Image({ src }) {
  return (
    <Grid item md={6} style={{ display: "flex" }}>
      <img src={src} alt="background_image" style={{ width: "90%" }} />
    </Grid>
  );
}

export default Image;
