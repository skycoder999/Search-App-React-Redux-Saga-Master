import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/root.reducer";
import rootSaga from "../sagas/root.saga";

const configureStore = (initialState = {}) => {
  const DEBUG = false;
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, DEBUG && logger];
  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares.filter(Boolean)));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
