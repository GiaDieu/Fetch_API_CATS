import { takeEvery, put, call } from "redux-saga/effects";
import {
  requestCats,
  requestCat,
  requestCatSuccess,
  requestCatError,
  requestCatsSuccess,
  requestCatsError
} from "../actions";
export function* watchFetchCat() {
  yield takeEvery("FETCHED_CAT", fetchCatAsync);
  yield takeEvery("FETCHED_CATS", fetchCatsAsync);
}

function* fetchCatAsync() {
  try {
    yield put(requestCat());
    const data = yield call(() => {
      return fetch("https://api.thecatapi.com/v1/images/search").then(reponse =>
        reponse.json()
      );
    });
    yield put(requestCatSuccess(data[0], data[0].id));
  } catch (error) {
    yield put(requestCatError());
  }
}

function* fetchCatsAsync() {
  try {
    yield put(requestCats());
    const data = yield call(() => {
      return fetch(
        "https://api.thecatapi.com/v1/images/search?limit=5"
      ).then(reponse => reponse.json());
    });
    // console.log(data);
    yield put(requestCatsSuccess(data));
  } catch (error) {
    yield put(requestCatsError());
  }
}
