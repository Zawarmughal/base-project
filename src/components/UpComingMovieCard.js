import React, { useEffect } from "react";
import SimpleAccordion from "./Accordion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LoadMoreButton from "./LoadMoreButton";

import {
  Box,
  Typography,
  CssBaseline,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Container,
  Accordion,
  AccordionSummary,
  Divider,
  AccordionDetails,
} from "@mui/material";
import PercentageProgress from "./Progress";
import abc from "../assets/abc.jpg";
import { useSelector } from "react-redux";

const UpCompingMovieCard = () => {
  const navigate = useNavigate();
  const getId = (id) => {
    navigate(`/popular/${id}`);
  };
  let count = 1;
  const dispatch = useDispatch();
  const upComingMovie = useSelector((state) => state.Movies.upComingMovie);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    dispatch({
      type: "UP_COMING_MOVIE",
      page: count,
    });
  };
  let type = "UP_COMING_MOVIE";
  
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <Typography sx={{ mt: 4, fontWeight: "bold" }} variant="h5">
            UpComping Movie
            </Typography>
            <Accordion sx={{ my: 2 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Sort</Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <Typography variant="h7">Sort Result By</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Filters</Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <Typography>Show Me</Typography>
              </AccordionDetails>
              <Divider />
              <AccordionDetails>
                <Typography>Availabilities</Typography>
              </AccordionDetails>
              <Divider />
              <AccordionDetails>
                <Typography>Release Dates</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ my: 2 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Where To Watch</Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <Typography variant="h7">My Services</Typography>
              </AccordionDetails>
              <Divider />
              <AccordionDetails>
                <Typography variant="h7">Country</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item marginTop={4} xs={12} sm={12} md={12} lg={9}>
            <Grid container align="center" spacing={2}>
              {upComingMovie?.map((movie, i) => {
                return (
                  <Grid
                    key={i}
                    item
                    lg={2.2}
                    sm={4}
                    xs={12}
                    md={3}
                    onClick={() => {
                      getId(movie.id);
                    }}
                  >
                    <Card
                      sx={{ minWidth: 155, maxWidth: 230, maxHeight: 550,cursor:"pointer" }}
                      align="start"
                    >
                      <CardMedia
                        component="img"
                        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      />
                      <PercentageProgress
                        key={movie.id}
                        vote={movie.vote_average * 10}
                      />
                      <CardContent sx={{height:"100px"}}>
                        <Typography
                          gutterBottom
                          fontWeight="bold"
                          variant="h7"
                          component="div"
                        >
                          {movie.title}
                        </Typography>
                        <Typography variant="h7" color="text.secondary">
                          {movie.release_date}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
              <LoadMoreButton type={type} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UpCompingMovieCard;
