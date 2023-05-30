import {
  FILTER_KATEGORI,
  GET_ALL_PRODUCTS,
  SEARCH_PRODUCT,
  FILTER_COLOR,
  FILTER_MODAL,
} from "../../action/products";

const InitialState = {
  getAllProductsResult: false,
  getAllProductsLoading: false,
  getAllProductsError: false,

  valueSearchProduct: "",

  filterCategory: "",
  isFilterCategory: false,
  filterColor: "",
  isFilterColor: false,
  modalFilter: "",
};

const ProductsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        getAllProductsResult: action.payload.data,
        getAllProductsLoading: action.payload.loading,
        getAllProductsError: action.payload.errorMessage,
      };
    case SEARCH_PRODUCT:
      return {
        ...state,
        valueSearchProduct: action.payload.data,
      };
    case FILTER_KATEGORI:
      return {
        ...state,
        filterCategory: action.payload.data,
        filterColor: "",
        isFilterCategory: true,
        modalFilter: "",
      };
    case FILTER_COLOR:
      return {
        ...state,
        filterColor: action.payload.data,
        filterCategory: "",
        isFilterColor: true,
        modalFilter: "",
      };
    case FILTER_MODAL:
      return {
        ...state,
        modalFilter: action.payload.data,
        filterCategory: "",
        filterColor: "",
      };
    default:
      return state;
  }
};

export default ProductsReducer;
