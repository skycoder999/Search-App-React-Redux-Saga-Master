import { call, put, takeLatest } from "redux-saga/effects";
import { ACTION_SEARCH, searchBegin, setItems, setError } from "../actions/search.action";
import { API_RESULTS_LIMIT } from "../utils/constants";

function* searchSaga({ payload }) {
  let items = [];
  if (payload.query) {
    try {
      yield put(searchBegin());
      let resp = yield call(fetch, `${payload.path}&query=${payload.query}`);
      resp = yield resp.json();
      items = (resp.results || []).slice(0, API_RESULTS_LIMIT);
    } catch (e) {
      yield put(setError(e));
    }
  }
  yield put(setItems({ items }));
}

export default function* actionWatcher() {
  yield takeLatest(ACTION_SEARCH, searchSaga);
}
