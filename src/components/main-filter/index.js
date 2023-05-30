import React, { useEffect, useState } from "react";
import Filter from "../../assets/img/icons/filter.png";
import "../../assets/css/style.css";
import FormRadio from "../form-radio";
import { FILTER_MODAL } from "../../redux/action/products";
import { useDispatch } from "react-redux";

const MainFilter = () => {
  const [isModalFilter, setIsModalFilter] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useDispatch();

  const ShowFilter = () => {
    setIsModalFilter((prev) => (!isModalFilter ? true : false));
  };

  const currentUrl = window.location.href;
  const urlObject = new URL(currentUrl);
  const url = urlObject.pathname.substr(1);

  useEffect(() => {
    dispatch({
      type: FILTER_MODAL,
      payload: {
        data: selectedOption,
      },
    });
  }, [selectedOption, dispatch]);

  return (
    <>
      <div className="main-filter-content">
        <div className="filter-content">
          <h4 className="filter-title">
            {url === ""
              ? "Kaos Pria"
              : url === "women-t-shirts"
              ? "Kaos Wanita"
              : url === "child-t-shirts"
              ? "Kaos Anak-anak"
              : ""}
          </h4>
          <p className="count-product">3 Produk</p>
        </div>
        <button className="btn-filter" onClick={ShowFilter}>
          Urutkan <img src={Filter} alt="Icon Filter" />
        </button>
      </div>
      {isModalFilter && (
        <div
          className={`modal-overlay ${isModalFilter ? "active" : ""}`}
          onClick={() =>
            setIsModalFilter((prev) => (isModalFilter ? false : true))
          }
        >
          <div className="modal-filter" onClick={(e) => e.stopPropagation()}>
            <h4 className="filter-title">Urutkan Berdasar</h4>
            <div className="radio-filter">
              <FormRadio
                id="new"
                name="option"
                value="new"
                label="Terbaru"
                checked={selectedOption === "new"}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <FormRadio
                id="low-price"
                name="option"
                value="low-price"
                label="Harga Terendah ke Termahal"
                checked={selectedOption === "low-price"}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <FormRadio
                id="high-price"
                name="option"
                value="high-price"
                label="Harga Termahal ke Terendah"
                checked={selectedOption === "high-price"}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainFilter;
