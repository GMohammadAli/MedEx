import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom";

function ReviewCard({profileTitle, imgSrc }) {
    const navigate  = useNavigate()

  return (
    <Card sx={{ maxWidth: 345, borderRadius: "20px" }}>
      <CardMedia component="img" height="194" image={imgSrc} alt={imgSrc} />
      <CardContent
        onClick={() => {
          navigate(`/signUp/${profileTitle}`);
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ textAlign: "center" }}
        >
          {profileTitle}
        </Typography>
      </CardContent>
    </Card>
  );
}

ReviewCard.propTypes = {
    profileTitle: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
}

export default ReviewCard;
