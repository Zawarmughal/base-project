import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import movie from "./saga/popularMoviesSaga";
import Movies from "./reducer/Movies";
import People from "./reducer/People";
import people from "./saga/PopularPeopleSaga";
import tvShow from "./saga/TvShowSaga";
import TvShow from "./reducer/TvShow";
import search from "./saga/SearchSga";
import Search from "./reducer/Search";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  TvShow,
  Movies,
  People,
  Search,
});

const store = configureStore({
  reducer,
  // middleware: () => [sagaMiddleware]}
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(movie);
sagaMiddleware.run(people);
sagaMiddleware.run(tvShow);
sagaMiddleware.run(search);

export default store;
