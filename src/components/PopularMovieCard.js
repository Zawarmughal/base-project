import React, { useEffect } from "react";
import SimpleAccordion from "./Accordion";
import { useDispatch } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
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
  Skeleton,
} from "@mui/material";
import PercentageProgress from "./Progress";
import abc from "../assets/abc.jpg";
import { useSelector } from "react-redux";
import LoadMoreButton from "./LoadMoreButton";
const PopularMovieCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.Movies.popularMovie);

  const getId = (id) => {
    navigate(`/popular/${id}`);
  };
  useEffect(() => {
    getData();
  }, []);
  let count = 1;
  const getData = () => {
    dispatch({
      type: "POPULAR_MOVIE",
      page: count,
    });
  };
  let type = "POPULAR_MOVIE";
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <Typography sx={{ mt: 4, fontWeight: "bold" }} variant="h5">
              Popular Movies
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
              {popularMovies ? (
                <>
                  {popularMovies.map((movie, i) => {
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
                          sx={{
                            minWidth: 155,
                            maxWidth: 230,
                            maxHeight: 550,
                            cursor: "pointer",
                          }}
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
                </>
              ) : (
                <Skeleton variant="rectangular" width={210} height={200} />
              )}
              <LoadMoreButton type={type} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PopularMovieCard;
