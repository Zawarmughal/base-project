import React from "react";
const initialState = {
  popularTvShow: [],
  popularTvShowDetail: [],
};
const TvShow = (state = initialState, action) => {
  switch (action.type) {
    case "SAGA_POPULAR_TV_SHOW":
      if (action.payload.page === 1) {
        return {
          popularTvShow: [...action.payload.data.results],
        };
      } else {
        return {
          popularTvShow: [
            ...state.popularTvShow,
            ...action.payload.data.results,
          ],
        };
      }
    case "SAGA_POPULAR_TV_SHOW_MOVIE_DETAIL":
      // console.log(action.data.data);
      return {
        popularTvShowDetail: action.payload.data,
      };

    default:
      return state;
  }
};

export default TvShow;
