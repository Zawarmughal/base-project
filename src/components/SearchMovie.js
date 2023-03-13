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
const SearchMovie = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.Search.search);
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

  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            
          </Grid>
          <Grid item marginTop={4} xs={12} sm={12} md={12} lg={9}>
            <Grid container align="center" spacing={2}>
              {search ? (
                <>
                  {search.map((movie, i) => {
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
              {/* <LoadMoreButton type={type} /> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SearchMovie;
