import React, { useState } from "react";
import { Link } from "react-router-dom";
import MegaMenu from "./mega-menu/MegaMenu";
import MegaMenuMobile from "./mega-menu/MegaMenuMobile";
import Logo from "../../views/Pages/miscellaneous/Logo";
import Nav from "./Nav";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-four bg-none fixed"
            : "theme-main-menu sticky-menu theme-menu-four bg-none"
        }
      >
        <div className="d-flex align-items-center justify-content-between">
          <Logo />
          <Nav />
        </div>

        <MegaMenuMobile />
        {/* 	End Mega Menu for Mobile */}
      </div>
      {/* /.theme-main-menu */}
    </>
  );
};

export default Header;
