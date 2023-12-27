import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_PROGRESS,
  GET_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_PROGRESS,
  DELETE_PRODUCT_SUCCESS,
} from "../action/action";

const initialState = {
  Product: [],
  GetProductProgress: false,
  GetProductError: null,

  DeleteProductProgress: false,
  DeleteProductError: null,

  ProductIsLoaded: false,
};

function ProductReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case GET_PRODUCT_PROGRESS:
      return {
        ...state,
        GetProductProgress: true,
      };
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        GetProductError: action.data,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        ProductIsLoaded: true,
        Product: action.data,
      };

    // Delete Product Actions
    case DELETE_PRODUCT_PROGRESS:
      return {
        ...state,
        DeleteProductProgress: true,
      };
    case DELETE_PRODUCT_ERROR:
      return {
        ...state,
        DeleteProductError: action.data,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state, 
        Product: state.Product.filter((product) => product.id !== action.data),
      };

    default:
      return state;
  }
}

export default ProductReducer;
