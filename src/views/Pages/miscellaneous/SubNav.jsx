import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const SubNav = () => {
  return (
    <div className="d-flex justify-content-between">
      <Logo width="100px" />
      <Link className="font-rubik go-back-button" to="/">
        Go to home
      </Link>
    </div>
  );
};

export default SubNav;
