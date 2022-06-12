import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  SidebarHeader,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import Logo from "../../../views/Pages/miscellaneous/Logo";


const ActiveLinkStyles = isActive => (
  isActive ?
    {
      fontWeight: "bold",
      color: "rgb(151, 60, 86)",
      transition: "all 0.3s ease-in-out",
    } :
    {}
);

const MegaMenuMobile = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="mega-menu-wrapper">
      <div className="mob-header multi-mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      <ProSidebar
        className={click ? "mega-mobile-menu menu-open" : "mega-mobile-menu"}
      >
        <SidebarHeader>
          <Logo
            classes="position-static filter-invert"
            style={{ filter: "invert(1) hue-rotate(190deg)" }}
          />
          <div className="fix-icon text-dark" onClick={handleClick}>
            <img src="images/icon/close-w.svg" alt="icon" />
          </div>
          {/* Mobile Menu close icon */}

          {/* End logo */}
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            <SubMenu title="Pages">
              <MenuItem>
                <NavLink style={ActiveLinkStyles} exact to="/">Home</NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink style={ActiveLinkStyles} to="/about">About Us</NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink style={ActiveLinkStyles} to="/features">Features</NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink style={ActiveLinkStyles} to="/portfolio"> Portfolio</NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink style={ActiveLinkStyles} to="/blog">Blog</NavLink>
              </MenuItem>
            </SubMenu>
            {/* End Pages SubMenu */}

            <MenuItem>
              <NavLink style={ActiveLinkStyles} to="/login">Login</NavLink>
            </MenuItem>

            <MenuItem>
              <NavLink style={ActiveLinkStyles} to="/signup">Sign Up</NavLink>
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default MegaMenuMobile;
