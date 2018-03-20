import {
  GET_PRODUCTS_SUCCESS,
  SET_DETAILS
} from "../actionTypes/products";

export function getProductsSuccess(products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products
  };
}

export function setDetails(index) {
	return {
		type: SET_DETAILS,
		payload: index
	};
}
