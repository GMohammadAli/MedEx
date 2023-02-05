import React from "react";
import PropTypes from "prop-types"
import { Grid } from "@mui/material";

function Image({src , width}) {
  return (
    <Grid item md={6} style={{ display: "flex" }}>
      <img
        src={`/Images/${src}`}
        alt="background_image"
        style={{ width: width }}
      />
    </Grid>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};
export default Image;
