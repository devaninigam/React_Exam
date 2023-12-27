import { all } from "redux-saga/effects";
import { DeleteProductSagaRoot, GetProductSagaRoot } from "./root/rootProduct";
export function* RootSaga (){
  // all api methode call in this all function ......
  yield all([GetProductSagaRoot(),DeleteProductSagaRoot()])
}