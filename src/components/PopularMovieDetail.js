import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CircularProgress from "@mui/material/CircularProgress";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import footer from "../assets/footer.png";
import {
  Box,
  Typography,
  Container,
  CardMedia,
  Card,
  Grid,
  Avatar,
  Paper,
} from "@mui/material";
import PercentageProgress from "./Progress";
const PopularMovieDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const popularMovieDetail = useSelector(
    (state) => state.Movies.popularMovieDetail
  );
  const popularMovieReview = useSelector(
    (state) => state.Movies.popularMovieReview
  );

  console.log(popularMovieReview);
  let newDate = new Date(popularMovieDetail?.release_date);
  useEffect(() => {
    dispatch({
      type: "POPULAR_MOVIE_DETAIL",
      movieId: id,
    });
  }, []);
  // let getYear = () => {
  //   let currentYear = popularMovieDetail?.release_date;
  //   return currentYear;
  // };
  const backGround = {
    backgroundImage: popularMovieDetail?.backdrop_path
      ? `url(https://image.tmdb.org/t/p/w500/${popularMovieDetail?.backdrop_path})`
      : "#",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    bgColor: "#000000c5",
    backgroundBlendMode: "soft-light",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: "auto",
    alignItem: "center",
    backgroundColor: "black",
    // opacity: "0.7",
  };
  let revenue = () => {
    if (popularMovieDetail?.revenue == "0") {
      return "-";
    } else {
      return `$${popularMovieDetail?.revenue}`;
    }
  };
  let budget = () => {
    if (popularMovieDetail?.budget == "0") {
      return "-";
    } else {
      return `$${popularMovieDetail?.budget}`;
    }
  };
  function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  }
  return (
    <>
      {popularMovieDetail ? (
        <Box
          sx={{
            ...backGround,
            bgcolor: "text.primary",
          }}
        >
          <Container width="xl">
            <Grid container py={6}>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Card sx={{ mixWidth: 50, minWidth: 150, maxHeight: 400 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    // height="auto"
                    image={
                      popularMovieDetail?.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${popularMovieDetail?.poster_path}`
                        : "#"
                    }
                  />
                </Card>
              </Grid>
              <Grid item lg={9} md={6} sm={6} xs={12} pl={5}>
                <Box sx={{ verticalAlign: "middle" }}>
                  <Box pt={5}>
                    <Typography variant="h5" color={"wheat"}>
                      {popularMovieDetail?.original_title} (
                      {newDate.getFullYear()}){" "}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle" color={"white"}>
                      {popularMovieDetail?.release_date} (US)
                    </Typography>
                    {popularMovieDetail?.genres?.map((genre) => {
                      return (
                        <Typography
                          key={genre.id}
                          variant="subtitle"
                          color={"white"}
                        >
                          {" "}
                          {genre.name},{" "}
                        </Typography>
                      );
                    })}
                    <Typography variant="subtitle" color={"white"}>
                      {toHoursAndMinutes(popularMovieDetail?.runtime)}
                    </Typography>
                  </Box>
                  <Box display={"flex"}>
                    {/* <PercentageProgress/> */}
                    <Avatar sx={{ bgcolor: "#002244", ml: "10px" }}>
                      <FormatListBulletedIcon fontSize="small" />
                    </Avatar>
                    <Avatar sx={{ bgcolor: "#002244", ml: "10px" }}>
                      <FavoriteIcon fontSize="small" />
                    </Avatar>
                    <Avatar sx={{ bgcolor: "#002244", ml: "10px" }}>
                      <BookmarkIcon fontSize="small" />
                    </Avatar>
                  </Box>
                  <Box>
                    <Typography variant="subtitle" color={"white"}>
                      {popularMovieDetail?.tagline}
                    </Typography>
                  </Box>
                  <Box mt={2}>
                    <Typography
                      variant="subtitle"
                      color={"white"}
                      fontWeight={"bold"}
                    >
                      Overview
                    </Typography>
                  </Box>
                  <Box mt={1}>
                    <Typography variant="subtitle" color={"white"}>
                      {popularMovieDetail?.overview}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
      <Box>
        <Box px={5}>
          <Grid container py={3}>
            <Grid item lg={9} md={9} sm={8} xs={12}>
              <Box pt={2} pl={5}>
                <Typography
                  fontWeight={"bold"}
                  sx={{ textDecoration: "underline" }}
                >
                  Reviews
                </Typography>
              </Box>
              {popularMovieReview?.map((review) => {
                console.log(review.author_details.avatar_path);
                let text = review.content;
              let string = text.substring(0, 500);
                var options = {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                };
                let date = new Date(review.updated_at).toLocaleDateString(
                  "en-US",
                  options
                );
                return (
                  <Box key={review.id}>
                    <Paper elevation={3} sx={{ height: "auto", m: 2, p: 3 }}>
                      <Box display={"flex"}>
                        <Avatar
                          alt="Travis Howard"
                          src={review.author_details.avatar_path}
                          sx={{ height: "60px", width: "60px" }}
                        />
                        <Box ml={4}>
                          <Typography variant="h6" fontWeight={"bold"}>
                            A review by {review.author}
                          </Typography>
                          <Typography>
                            Written by {review.author_details.username} on{" "}
                            {date}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography ml={11.5} mt={3}>
                        {string}
                      </Typography>
                    </Paper>
                  </Box>
                );
              })}
            </Grid>
            <Grid item lg={3} md={3} sm={4} xs={12}>
              <Box pl={2}>
                <Box display="flex">
                  <FacebookRoundedIcon />
                  <Box pl={1}>
                    <TwitterIcon />
                  </Box>
                  <Box pl={1}>
                    <InstagramIcon />
                  </Box>
                </Box>
                <Box pt={2}>
                  <Box>
                    <Typography fontWeight={"bold"}>Status</Typography>
                  </Box>
                  <Box>
                    <Typography>{popularMovieDetail?.status}</Typography>
                  </Box>
                </Box>
                <Box pt={2}>
                  <Box>
                    <Typography fontWeight={"bold"}>
                      Original Language
                    </Typography>
                  </Box>
                  <Box>
                    <Typography>
                      {popularMovieDetail?.original_language}
                    </Typography>
                  </Box>
                </Box>
                <Box pt={2}>
                  <Box>
                    <Typography fontWeight={"bold"}>Budget</Typography>
                  </Box>
                  <Box>
                    <Typography>{budget()}</Typography>
                  </Box>
                </Box>
                <Box pt={2}>
                  <Box>
                    <Box>
                      <Typography fontWeight={"bold"}>Revenue</Typography>
                    </Box>
                    <Box>
                      <Typography>{revenue()}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default PopularMovieDetail;
