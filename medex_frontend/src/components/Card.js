import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function ReviewCard({profileTitle, imgSrc }) {

  return (
    <Card sx={{ maxWidth: 345, borderRadius: "20px"}}>
      <CardMedia
        component="img"
        height="194"
        image={imgSrc}
        alt={imgSrc}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" style={{textAlign:"center"}}>
          {profileTitle}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ReviewCard;
