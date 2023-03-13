import React, { useEffect } from "react";
import people from "../assets/people.jpg";
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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const PopularPeopleCard = () => {
  const popularPeople = useSelector((state) => state.People.popularPeople);

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    dispatch({
      type: "POPULAR_PEOPLE",
    });
  };
  return (
    <>
      <Container>
        <Typography sx={{ mt: 2, mb: 5, fontWeight: "bold" }} variant="h5">
          Popular People
        </Typography>

        <Grid container spacing={3} sx={{ px: "auto" }}>
          {popularPeople?.map((people) => {
            return (
              <Grid item key={people.id}>
              
                <Card
                  sx={{
                    minWidth: 235,
                    borderRadius: 0,
                    align: "start",
                    width: 235,
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      sx={{ height: 230 }}
                      image={`https://image.tmdb.org/t/p/w500/${people.profile_path}`}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {people.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                      ></Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default PopularPeopleCard;
