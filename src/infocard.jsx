import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({result}) {
  let imageurl =
    "https://images.pexels.com/photos/1384901/pexels-photo-1384901.jpeg?auto=compress&cs=tinysrgb&w=600";

  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={imageurl} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {result.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <div>description: <b>{result.description}</b></div>
          <div>feelslike: <b>{result.feelslike}</b></div>
          <div>humidity: <b>{result.humidity}</b></div>
          <div>temp: <b>{result.temp}</b></div>
          <div>tempmax: <b>{result.tempmax}</b></div>
          <div>tempmin: <b>{result.tempmin}</b></div>
        </Typography>
      </CardContent>
    </Card>
  );
}
