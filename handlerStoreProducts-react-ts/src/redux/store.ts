import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { takeLatest } from "redux-saga/effects";

import { reducerProductsList } from "./reducerProductsList";
import { getProductsList } from "./saga";
import { Actions } from "./actions";

const middlewareSaga = createSagaMiddleware();

const initialState: Object = {
  loading: true,
  products: [],
};

const rootReducer = combineReducers({
  items: reducerProductsList,
});

function* rootSaga() {
  yield takeLatest(Actions.FETCH_PRODUCTS_LIST_REQUEST, getProductsList);
}

export const configureStore = () => {
  const store = createStore(
    rootReducer, // serve per combinare più reducers nello store
    initialState, // json iniziale su redux
    composeWithDevTools(applyMiddleware(middlewareSaga)) //applicazione del middleware (redux-saga) allo store (redux)
  );
  middlewareSaga.run(rootSaga);
  return store;
};
