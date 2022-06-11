import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <Logo classes="position-static" />
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
                <Link to="/">Home</Link>
              </MenuItem>

              <MenuItem>
                <Link to="/about">About Us</Link>
              </MenuItem>

              <MenuItem>
                <Link to="/features">Features</Link>
              </MenuItem>

              <MenuItem>
                <Link to="/portfolio"> Portfolio</Link>
              </MenuItem>

              <MenuItem>
                <Link to="/blog">Blog</Link>
              </MenuItem>
            </SubMenu>
            {/* End Pages SubMenu */}

            <MenuItem>
              <Link to="/login">Login</Link>
            </MenuItem>

            <MenuItem>
              <Link to="/signup">Sign Up</Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default MegaMenuMobile;
