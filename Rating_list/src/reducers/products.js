import { GET_PRODUCTS_SUCCESS, SET_DETAILS } from "../actionTypes/products";

export default ( prevState = { productCard: [],  detailsIndex:0, }, action ) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...prevState,
        isLoading: false,
        productCard: action.products
      };
    case SET_DETAILS:
      return {...prevState , 
        detailsIndex: action.payload
      }; 
    default:
      return prevState;
  }
};
