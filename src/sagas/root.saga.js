import { all } from "redux-saga/effects";
import searchSaga from "./search.saga";

function* rootSaga() {
  yield all([searchSaga()]);
}

export default rootSaga;
