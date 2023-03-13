import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* searchMovie(props) {
  console.log(props.action.query);
  let data = yield axios.get(
    `https://api.themoviedb.org/3/search/multi?api_key=fd51a367f88926fa40d83760311ca74a&language=en-US&page=1&include_adult=false&query=${props.action.query}`
  );
  
  yield put({
    type: "SAGA_SEARCH",
    payload: {
      data: data.data,
    },
  });
}

function* search() {
  yield takeEvery("SEARCH", searchMovie);
}
export default search;
