import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../../assets/css/style.css";
import { SEARCH_PRODUCT } from "../../redux/action/products";

const FormInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: SEARCH_PRODUCT,
      payload: {
        data: value,
      },
    });
  }, [value, dispatch]);

  return (
    <>
      <input
        type="text"
        className="search-bar"
        name="search-bar"
        placeholder="Nama Produk"
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default FormInput;
