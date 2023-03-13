import React from "react";

import {
    Container,
    Grid,
    Box,
    Typography,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
  } from "@mui/material";
const CardPopular = () => {
  return (
    <>
      <Card sx={{ maxWidth: 180 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="230"
            image={people}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CardPopular;
