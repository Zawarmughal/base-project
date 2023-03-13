import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* popularMovie(props) {
 
  let data = yield axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=fd51a367f88926fa40d83760311ca74a&language=en-US&page=${props.page}`
  );
  yield put({
    type: "SAGA_POPULAR_MOVIE",
    payload: {
      data: data.data,
      page: props.page,
    },
  });
}
function* nowPlayingMovie(props) {
  let data = yield axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=fd51a367f88926fa40d83760311ca74a&language=en-US&page=${props.page}`
  );
  yield put({
    type: "SAGA_NOW_PLAYING",
    payload: {
      data: data.data,
      page: props.page,
    },
  });
}
function* upComingMovie(props) {
  let data = yield axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=fd51a367f88926fa40d83760311ca74a&language=en-US&page=${props.page}`
  );
  //   console.log(data.data);
  yield put({
    type: "SAGA_UP_COMING_MOVIE",
    payload: {
      data: data.data,
      page: props.page,
    },
  });
}
function* topRatedMovie(props) {
  let data = yield axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=fd51a367f88926fa40d83760311ca74a&language=en-US&page=${props.page}`
  );
  yield put({
    type: "SAGA_TOP_RATED_MOVIE",
    payload: {
      data: data.data,
      page: props.page,
    },
  });
}

function* popularMovieDetail(id) {
  let data = yield axios.get(
    `https://api.themoviedb.org/3/movie/${id.movieId}?api_key=fd51a367f88926fa40d83760311ca74a&language=en-US`
  );
  let review = yield axios.get(
    `https://api.themoviedb.org/3/movie/${id.movieId}/reviews?api_key=fd51a367f88926fa40d83760311ca74a&language=en-US&page=1`
  );
  console.log(data);
  yield put({
    type: "SAGA_POPULAR_MOVIE_DETAIL",
    payload: {
      data: data.data,
      review: review.data,
    },
  });
}
function* trendingMovie() {
  let data = yield axios.get(
    "https://api.themoviedb.org/3/trending/all/day?api_key=fd51a367f88926fa40d83760311ca74a"
  );
  // console.log(data.data);
  yield put({
    type: "SAGA_TRENDING_MOVIE",
    payload: {
      data: data.data,
    },
  });
}

function* movie() {
  yield takeEvery("POPULAR_MOVIE", popularMovie);
  yield takeEvery("NOW_PLAYING", nowPlayingMovie);
  yield takeEvery("UP_COMING_MOVIE", upComingMovie);
  yield takeEvery("TOP_RATED_MOVIE", topRatedMovie);
  yield takeEvery("POPULAR_MOVIE_DETAIL", popularMovieDetail);
  yield takeEvery("TRENDING_MOVIE", trendingMovie);
}
export default movie;
