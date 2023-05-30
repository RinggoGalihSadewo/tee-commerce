import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/css/style.css";
import { FILTER_KATEGORI } from "../../redux/action/products";

const FormCheckbox = ({ id, name, value, label }) => {
  const { filterCategory } = useSelector((state) => state.ProductsReducer);
  const [isChecked, setIsChecked] = useState(false);
  const [checkValue, setIsCheckValue] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setIsCheckValue((prevValues) => [...prevValues, value]);
      dispatch({
        type: FILTER_KATEGORI,
        payload: {
          data: checkValue,
        },
      });
    } else {
      setIsCheckValue((prevValues) =>
        prevValues.filter((item) => item !== value)
      );
      dispatch({
        type: FILTER_KATEGORI,
        payload: {
          data: checkValue,
        },
      });
    }
  };

  return (
    <div className="form-group">
      <input
        type="checkbox"
        value={value}
        className="checkbox-filter"
        onChange={(e) => {
          // add to list
          if (e.target.checked) {
            setIsCheckValue([...checkValue, e.target.value]);
          } else {
            // remove from list
            setIsCheckValue(
              checkValue.filter((val) => val.value !== checkValue)
            );
          }
        }}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default FormCheckbox;
