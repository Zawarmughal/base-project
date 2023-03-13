import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* popularPeople() {
  let data = yield axios.get(
    "https://api.themoviedb.org/3/person/popular?api_key=fd51a367f88926fa40d83760311ca74a&language=en-US&page=1"
  );

  console.log(data);
  yield put({
    type: "SAGA_POPULAR_PEOPLE",
    payload: {
      data: data.data,
    },
  });
}

function* people() {
  yield takeEvery("POPULAR_PEOPLE", popularPeople);
}
export default people;
