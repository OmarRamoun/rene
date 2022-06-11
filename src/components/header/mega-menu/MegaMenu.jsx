import { NavLink } from "react-router-dom";


const MegaMenu = () => {

  return (
    <ul className="navbar-nav">
      <li>
        <NavLink className="nav-item" to="/" as="span">
          <span className="nav-link">
            Home
          </span>
        </NavLink>
      </li>
      {/* End li */}

      <li>
        <NavLink className="nav-item" to="/about">
          <span className="nav-link">
            About
          </span>
        </NavLink>
      </li>
      {/* End li */}

      <li>
        <NavLink className="nav-item" to="/features">
          <span className="nav-link">
            Features
          </span>
        </NavLink>
      </li>
      {/* End li */}

      <li>
        <NavLink className="nav-item" to="/portfolio">
          <span className="nav-link">
            Portfolio
          </span>
        </NavLink>
      </li>
      {/* End li */}

      <li>
        <NavLink className="nav-item" to="/blog">
          <span className="nav-link">
            Blog
          </span>
        </NavLink>
      </li>
      {/* End li */}

      <li>
        <NavLink className="nav-item" to="/contact">
          <span className="nav-link">
            Contact
          </span>
        </NavLink>
      </li>
      {/* End li */}
    </ul>
  );
};

MegaMenu.defaultProps = {
  activeTab: "home",
};

export default MegaMenu;
