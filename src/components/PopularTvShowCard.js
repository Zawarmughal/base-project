import React, { useEffect } from "react";
import SimpleAccordion from "./Accordion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LoadMoreButton from "./LoadMoreButton";
import {
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
const PopularTvShowCard = () => {
  const dispatch = useDispatch();
  const popularTvShow = useSelector((state) => state.TvShow.popularTvShow);
  const navigate = useNavigate();

  const getId = (id) => {
    navigate(`/populartvshow/${id}`);
  };
  let count = 1;
  useEffect(() => {
    dispatch({
      type: "POPULAR_TV_SHOW",
      page: count,
    });
  }, []);
  let type = "POPULAR_TV_SHOW";
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <Typography sx={{ mt: 4, fontWeight: "bold" }} variant="h5">
            Popular Tv Show
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
              {popularTvShow?.map((movie, i) => {
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
                      <CardContent>
                        <Typography
                          gutterBottom
                          fontWeight="bold"
                          variant="h7"
                          component="div"
                        >
                          {movie.name}
                        </Typography>
                        <Typography variant="h7" color="text.secondary">
                          {movie.first_air_date}
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

export default PopularTvShowCard;
