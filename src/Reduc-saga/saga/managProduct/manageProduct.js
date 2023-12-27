import { call, put } from "redux-saga/effects"
import { DELETE_PRODUCT_ERROR, 
  DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS,} from "../../Product/action/action";
import { DeleteProduct,  getProduct } from "../../Product/api/api";

// get data respons manage 
export function* HandleGetProduct(action) {
  try {
    const res = yield call(getProduct, action)
    const status = res.status;
    const data = res.data;
    if (status === 200) {
      yield put({ type: GET_PRODUCT_SUCCESS, data })
    } else {
      yield put({ type: GET_PRODUCT_ERROR, data })
    }
  } catch (error) {
    yield put({ type: GET_PRODUCT_ERROR, error })
  }
}
 
// Delete data respons manage 
export function* HandleDeleteProduct(action) {
  try {
    const res = yield call(DeleteProduct, action)
    const status = res.status;
    const data = res.data;
    if (status === 200 || status === 201) {
      yield put({ type: DELETE_PRODUCT_SUCCESS, data })
    } else {
      yield put({ type: DELETE_PRODUCT_ERROR, data })
    }
  } catch (error) {
    yield put({ type: DELETE_PRODUCT_ERROR, error })
  }
}
