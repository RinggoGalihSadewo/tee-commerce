import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../../assets/css/style.css";
import Accordion from "../../assets/img/icons/accordion.png";
import FilterColor from "../filter-color";
import FormRadio from "../form-radio";
import { FILTER_KATEGORI } from "../../redux/action/products";

const Filter = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: FILTER_KATEGORI,
      payload: {
        data: selectedOption,
      },
    });
  }, [selectedOption, dispatch]);

  return (
    <div className="filter">
      <div className="filter-count">
        <h4 className="filter-title">Filter</h4>
        <a href="/" className="delete-filter">
          Hapus Semua
        </a>
      </div>
      <div className="devider" />
      <div className="filter-wrapper">
        <div className="filter-color">
          <h4 className="filter-title">Warna</h4>
          <img
            src={Accordion}
            alt="Icon Accordion"
            className="icon-accordion"
          />
        </div>
        <div className="main-filter">
          <FilterColor />
        </div>
      </div>
      <div className="devider" />
      <div className="filter-wrapper">
        <div className="filter-kategori">
          <h4 className="filter-title">Kategori</h4>
          <img
            src={Accordion}
            alt="Icon Accordion"
            className="icon-accordion"
          />
        </div>
        <div className="main-filter">
          <FormRadio
            id="katun"
            name="kategori"
            value="katun"
            label="Katun"
            checked={selectedOption === "katun"}
            onChange={(event) => setSelectedOption(event.target.value)}
          />
          <FormRadio
            id="kaus"
            name="kategori"
            value="kaus"
            label="Kaus"
            checked={selectedOption === "kaus"}
            onChange={(event) => setSelectedOption(event.target.value)}
          />
          <FormRadio
            id="lengan-pendek"
            name="kategori"
            value="lengan pendek"
            label="Lengan Pendek"
            checked={selectedOption === "lengan pendek"}
            onChange={(event) => setSelectedOption(event.target.value)}
          />
          <FormRadio
            id="kemeja"
            name="kategori"
            value="kemeja"
            label="Kemeja"
            checked={selectedOption === "kemeja"}
            onChange={(event) => setSelectedOption(event.target.value)}
          />
          <FormRadio
            id="lengan-panjang"
            name="kategori"
            value="lengan panjang"
            label="Lengan Panjang"
            checked={selectedOption === "lengan panjang"}
            onChange={(event) => setSelectedOption(event.target.value)}
          />
          <FormRadio
            id="chambray"
            name="kategori"
            value="chambray"
            label="Chambray"
            checked={selectedOption === "chambray"}
            onChange={(event) => setSelectedOption(event.target.value)}
          />
          <FormRadio
            id="baby-canvas"
            name="kategori"
            value="baby canvas"
            label="Baby Canvas"
            checked={selectedOption === "baby canvas"}
            onChange={(event) => setSelectedOption(event.target.value)}
          />
          <FormRadio
            id="drill"
            name="kategori"
            value="drill"
            label="Drill"
            checked={selectedOption === "drill"}
            onChange={(event) => setSelectedOption(event.target.value)}
          />
          <FormRadio
            id="denim"
            name="kategori"
            value="denim"
            label="Denim"
            checked={selectedOption === "denim"}
            onChange={(event) => setSelectedOption(event.target.value)}
          />
          <FormRadio
            id="celana"
            name="kategori"
            value="celana"
            label="Celana"
            checked={selectedOption === "celana"}
            onChange={(event) => setSelectedOption(event.target.value)}
          />
          <FormRadio
            id="celana-panjang"
            name="kategori"
            value="celana panjang"
            label="Celana Panjang"
            checked={selectedOption === "celana panjang"}
            onChange={(event) => setSelectedOption(event.target.value)}
          />
          <FormRadio
            id="kanvas"
            name="kategori"
            value="kanvas"
            label="Kanvas"
            checked={selectedOption === "kanvas"}
            onChange={(event) => setSelectedOption(event.target.value)}
          />
          <FormRadio
            id="celana-pendek"
            name="kategori"
            value="celana pendek"
            label="Celana Pendek"
            checked={selectedOption === "celana pendek"}
            onChange={(event) => setSelectedOption(event.target.value)}
          />
          <FormRadio
            id="lotto"
            name="kategori"
            value="lotto"
            label="Lotto"
            checked={selectedOption === "lotto"}
            onChange={(event) => setSelectedOption(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
