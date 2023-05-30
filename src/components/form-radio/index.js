import React from "react";
import "../../assets/css/style.css";

const FormRadio = ({ name, value, checked, onChange, label, id }) => {
  return (
    <div className="form-group">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="checbox-filter"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default FormRadio;
