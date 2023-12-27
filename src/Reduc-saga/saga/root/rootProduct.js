import { takeLatest } from "redux-saga/effects";
import { DELETE_PRODUCT_PROGRESS, GET_PRODUCT_PROGRESS } from "../../Product/action/action";
import { HandleDeleteProduct, HandleGetProduct  } from "../managProduct/manageProduct"
// Get api action send with call function
export function* GetProductSagaRoot() {
  yield takeLatest(GET_PRODUCT_PROGRESS, HandleGetProduct)
}
 
// Delete api action send with call function

export function* DeleteProductSagaRoot() {
  yield takeLatest(DELETE_PRODUCT_PROGRESS, HandleDeleteProduct)
}