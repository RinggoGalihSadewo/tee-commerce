import React, { useEffect } from "react";
import Filter from "../components/filter";
import MainContent from "../components/main-content";
import Navbar from "../components/navbar";

const MainViews = () => {
  const currentUrl = window.location.href;
  const urlObject = new URL(currentUrl);
  const url = urlObject.pathname.substr(1);

  useEffect(() => {
    switch (url) {
      case "":
        document.title = "TEE COMMERCE - MAN T-TSHIRT";
        break;
      case "women-t-shirts":
        document.title = "TEE COMMERCE - WOMEN T-TSHIRT";
        break;
      case "child-t-shirts":
        document.title = "TEE COMMERCE - CHILD T-TSHIRT";
        break;
      default:
        break;
    }
  });

  return (
    <>
      <Navbar />
      <div className="main-content">
        <Filter />
        <MainContent />
      </div>
    </>
  );
};

export default MainViews;
