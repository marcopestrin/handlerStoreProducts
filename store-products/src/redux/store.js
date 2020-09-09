import { combineReducers, createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import { takeLatest } from "redux-saga/effects"

import { reducerProductsList } from "./reducerProductsList"
import { getProductsList } from "./saga"
import { FETCH_PRODUCTS_LIST_REQUEST } from "./actions"

const middlewareSaga = createSagaMiddleware();

const initialState = {
  products: { 
    products: []
  }
};

const rootReducer = combineReducers({
  products: reducerProductsList
});

function* rootSaga() {
  yield takeLatest(FETCH_PRODUCTS_LIST_REQUEST, getProductsList);
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
