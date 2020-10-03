import { put, call } from "redux-saga/effects";
import { 
  FETCH_PRODUCTS_LIST_FAILURE,
  FETCH_PRODUCTS_LIST_SUCCESS
} from "./actions";
import { BASE_PATH } from "../config"

const getListProducts = async() => {
    const response = await fetch(`${BASE_PATH}`)
    return response.json()
} 

export function* getProductsList() {
  try {
    // ottengo tutta la lista dei prodotti tramite una chiamata asincrona
    const payload = yield call(getListProducts)
    yield put({
      type: FETCH_PRODUCTS_LIST_SUCCESS,
      payload
    });
    
  } catch (e) {

    yield put({
      type: FETCH_PRODUCTS_LIST_FAILURE,
      payload: { message: e.message },
    });

  }
}