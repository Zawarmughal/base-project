import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {
  Box,
  Typography,
  Container,
  CardMedia,
  Card,
  Grid,
  Avatar,
} from "@mui/material";

const TvShowDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const popularMovieDetail = useSelector(
    (state) => state.TvShow.popularTvShowDetail
  );
  console.log(popularMovieDetail);
  let newDate = new Date(popularMovieDetail?.last_air_date);
  useEffect(() => {
    dispatch({
      type: "POPULAR_TV_SHOW_MOVIE_DETAIL",
      movieId: id,
    });
  }, []);
  // let getYear = () => {
  //   let currentYear = popularMovieDetail?.release_date;
  //   return currentYear;
  // };
  const backGround = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${popularMovieDetail?.backdrop_path})`,
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
  function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  }
  return (
    <>
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
                    {popularMovieDetail?.original_name} (
                    {newDate.getFullYear()}){" "}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle" color={"white"}>
                    {popularMovieDetail?.last_air_date} (US)
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
    </>
  );
};

export default TvShowDetail;
