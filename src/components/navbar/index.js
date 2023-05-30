import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/style.css";
import FormInput from "../form-input";
import Search from "../../assets/img/icons/search.png";
import Bag from "../../assets/img/icons/bag.png";
import User from "../../assets/img/icons/user.png";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const currentUrl = window.location.href;
  const urlObject = new URL(currentUrl);
  const isActiveUrl = urlObject.pathname.substr(1);

  return (
    <>
      <div className="navbar">
        <div className="navbar-menu-wrapper">
          <div className="navbar-brand">
            <h2 className="navbar-title">
              <NavLink to="/">Tee Commerce</NavLink>
            </h2>
          </div>
          <div className="navbar-menu">
            <ul className="navbar-links">
              <li
                className={`navbar-link ${isActiveUrl === "" ? "active" : ""}`}
              >
                <NavLink to="/">Pria</NavLink>
              </li>
              <li
                className={`navbar-link ${
                  isActiveUrl === "women-t-shirts" ? "active" : ""
                }`}
              >
                <NavLink to="/women-t-shirts">Wanita</NavLink>
              </li>
              <li
                className={`navbar-link ${
                  isActiveUrl === "child-t-shirts" ? "active" : ""
                }`}
              >
                <NavLink to="/child-t-shirts">Anak-anak</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-features">
          <div className="navbar-search-bar">
            <img src={Search} alt="Icon Search" className="icons-search" />
            <FormInput />
          </div>
          <div className="navbar-bag">
            <img src={Bag} alt="Icon Bag" className="icons-bag" />
          </div>
          <div className="navbar-user">
            <img src={User} alt="Icon User" className="icons-user" />
          </div>
        </div>
        <div
          className={`navbar-toggle ${isToggle ? "active" : "inactive"}`}
          onClick={() => setIsToggle((prev) => (!isToggle ? true : false))}
        >
          <span className="icon-bar-1"></span>
          <span className="icon-bar-2"></span>
          <span className="icon-bar-3"></span>
        </div>
      </div>
      {isToggle && (
        <div className={`toggle-menu ${isToggle ? "active" : "inactive"}`}>
          <div
            className={`navbar-toggle ${isToggle ? "active" : "inactive"}`}
            onClick={() => setIsToggle((prev) => (!isToggle ? true : false))}
          >
            <span className="icon-bar-1-toggle"></span>
            <span className="icon-bar-2-toggle"></span>
          </div>
          <div className="toggle-links">
            <ul className="toggle-links-menu">
              <li
                className={`toggle-link ${isActiveUrl === "" ? "active" : ""}`}
              >
                <NavLink to="/">Pria</NavLink>
              </li>
              <li
                className={`toggle-link ${
                  isActiveUrl === "women-t-shirts" ? "active" : ""
                }`}
              >
                <NavLink to="/women-t-shirts">Wanita</NavLink>
              </li>
              <li
                className={`toggle-link ${
                  isActiveUrl === "child-t-shirts" ? "active" : ""
                }`}
              >
                <NavLink to="/child-t-shirts">Anak-anak</NavLink>
              </li>
            </ul>
            <div className="navbar-search-bar">
              <img
                src={Search}
                alt="Icon Search Bar"
                className="icons-search"
              />
              <FormInput />
            </div>
            <div className="toggle-bag-user">
              <div className="navbar-bag">
                <img src={Bag} alt="Icon Bag" className="icons-bag" />
              </div>
              <div className="navbar-user">
                <img src={User} alt="Icon User" className="icons-user" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
