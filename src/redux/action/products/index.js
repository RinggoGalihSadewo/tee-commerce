import axios from "axios";
import AxiosConfig from "../../../config/axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const FILTER_KATEGORI = "FILTER_KATEGORI";
export const FILTER_COLOR = "FILTER_COLOR";
export const FILTER_MODAL = "FILTER_MODAL";

export const GetAllProducts = () => {
  const { instance } = AxiosConfig();
  return (dispatch) => {
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios
      .get("https://646f0ae509ff19b1208674bc.mockapi.io/product")
      .then((res) => {
        dispatch({
          type: GET_ALL_PRODUCTS,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ALL_PRODUCTS,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};
