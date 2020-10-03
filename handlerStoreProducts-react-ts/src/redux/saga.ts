import { put, call } from "redux-saga/effects";
import { Actions } from "./actions";
import { BASE_PATH } from "../config";

const getListProducts = async () => {
  const response = await fetch(`${BASE_PATH}`);
  return response.json();
};

export function* getProductsList() {
  try {
    const payload = yield call(getListProducts);
    yield put({
      type: Actions.FETCH_PRODUCTS_LIST_SUCCESS,
      payload,
    });
  } catch (e) {
    yield put({
      type: Actions.FETCH_PRODUCTS_LIST_FAILURE,
      payload: { message: e.message },
    });
  }
}
