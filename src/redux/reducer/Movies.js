import React from "react";
const initialState = {
  popularMovie: [],
  nowPlayingMovie: [],
  upComingMovie: [],
  topRatedMovie: [],
  popularMovieDetail: [],
  popularMovieReview: [],
  trendingMovie: [],
};
const Movies = (state = initialState, action) => {
  switch (action.type) {
    case "SAGA_POPULAR_MOVIE":
      if (action.payload.page === 1) {
        return {
          popularMovie: [...action.payload.data.results],
        };
      } else {
        return {
          popularMovie: [...state.popularMovie, ...action.payload.data.results],
        };
      }

    case "SAGA_NOW_PLAYING":
      if (action.payload.page === 1) {
        return {
          nowPlayingMovie: [...action.payload.data.results],
        };
      } else {
        return {
          nowPlayingMovie: [
            ...state.nowPlayingMovie,
            ...action.payload.data.results,
          ],
        };
      }

    case "SAGA_UP_COMING_MOVIE":
      if (action.payload.page === 1) {
        return {
          upComingMovie: [...action.payload.data.results],
        };
      } else {
        return {
          upComingMovie: [
            ...state.upComingMovie,
            ...action.payload.data.results,
          ],
        };
      }

    case "SAGA_TOP_RATED_MOVIE":
      if (action.payload.page === 1) {
        return {
          topRatedMovie: [...action.payload.data.results],
        };
      } else {
        return {
          topRatedMovie: [
            ...state.topRatedMovie,
            ...action.payload.data.results,
          ],
        };
      }
    case "SAGA_POPULAR_MOVIE_DETAIL":
      
      return {
        popularMovieDetail: action.payload.data,
        popularMovieReview: [...action.payload.review.results],
      };
    case "SAGA_TRENDING_MOVIE":
      
      return {
        trendingMovie: [...action.payload.data.results],
      };

    default:
      return state;
  }
};

export default Movies;
