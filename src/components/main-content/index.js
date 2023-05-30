import React from "react";
import MenBanner from "../../assets/img/banners/men.png";
import WomenBanner from "../../assets/img/banners/women.png";
import ChildBanner from "../../assets/img/banners/child.png";
import MainFilter from "../main-filter";
import MainProducts from "../main-products";

const MainContent = () => {
  const currentUrl = window.location.href;
  const urlObject = new URL(currentUrl);
  const renderBanner = urlObject.pathname.substr(1);

  return (
    <>
      <div className="main-content-wrapper">
        {renderBanner === "" ? (
          <img
            src={MenBanner}
            alt="Foto Benner Baju Pria"
            className="img-banner"
          />
        ) : renderBanner === "women-t-shirts" ? (
          <img
            src={WomenBanner}
            alt="Foto Benner Baju Wanita"
            className="img-banner"
          />
        ) : renderBanner === "child-t-shirts" ? (
          <img
            src={ChildBanner}
            alt="Foto Benner Baju Anak-anak"
            className="img-banner"
          />
        ) : (
          ""
        )}
        <MainFilter />
        <MainProducts />
      </div>
    </>
  );
};

export default MainContent;
