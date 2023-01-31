import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function ReviewCard({profileTitle, imgSrc , username, emailAddress}) {
    const navigate  = useNavigate()
    const authContext = useContext(AuthContext);
    authContext.user = {
      username: username,
      emailAddress: emailAddress,
      profileStatus: profileTitle
    }

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
