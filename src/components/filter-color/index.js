import React from "react";
import { useDispatch } from "react-redux";
import { FILTER_COLOR } from "../../redux/action/products";

const ValueFilters = [
  {
    color: "#FF2536",
    label: "Merah",
    value: "merah",
  },
  {
    color: "#323232",
    label: "Hitam",
    value: "hitam",
  },
  {
    color: "#FFFFFF",
    label: "Putih",
    value: "putih",
  },
  {
    color: "#626067",
    label: "Abu-abu",
    value: "abu abu",
  },
  {
    color: "#5DB63E",
    label: "Hijau",
    value: "hijau",
  },
  {
    color: "#1C5CD8",
    label: "Biru",
    value: "biru",
  },
  {
    color: "#C9E0FF",
    label: "Biru Muda",
    value: "biru muda",
  },
  {
    color: "#FBE2C5",
    label: "Krem",
    value: "cream",
  },
  {
    color: "#FFE86F",
    label: "Kuning",
    value: "kuning",
  },
  {
    color: "#FF8B37",
    label: "Orange",
    value: "orange",
  },
  {
    color: "#FF8B37",
    label: "Ungu",
    value: "ungu",
  },
];

const FilterColor = () => {
  const dispatch = useDispatch();

  const HandleColor = (color) => {
    dispatch({
      type: FILTER_COLOR,
      payload: {
        data: color,
      },
    });
  };

  return (
    <>
      <div className="wrapper-colors">
        {ValueFilters.map((ValueFilter, index) => {
          return (
            <div style={{ margin: "1rem 0" }} key={index}>
              <div
                className="wrapper-colors-filter"
                onClick={() => HandleColor(ValueFilter.value.toLowerCase())}
              >
                <div
                  style={{
                    backgroundColor: ValueFilter.color,
                    width: "10px",
                    height: "10px",
                    border: "1px solid #323232",
                    borderRadius: "2px",
                    cursor: "pointer",
                  }}
                />
                <label
                  style={{
                    marginLeft: "0.3rem",
                    fontSize: "0.75rem",
                    cursor: "pointer",
                  }}
                >
                  {ValueFilter.label}
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FilterColor;
