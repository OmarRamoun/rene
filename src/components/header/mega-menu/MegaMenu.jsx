import { NavLink } from "react-router-dom";


const ActiveLinkStyles = isActive => (
  isActive ?
    { fontWeight: "bold" } : {}
);

const MegaMenu = () => {

  return (
    <ul className="navbar-nav align-items-center">
      <li>
        <NavLink
          className="nav-item"
          to="/"
          exact={true}
          style={ActiveLinkStyles}
        >
          <span className="nav-link">
            Home
          </span>
        </NavLink>
      </li>
      {/* End li */}

      <li>
        <NavLink
        className="nav-item"
         to="/about"
         style={ActiveLinkStyles}
         >
          <span className="nav-link">
            About
          </span>
        </NavLink>
      </li>
      {/* End li */}

      <li>
        <NavLink
        className="nav-item"
         to="/features"
         style={ActiveLinkStyles}
         >
          <span className="nav-link">
            Features
          </span>
        </NavLink>
      </li>
      {/* End li */}

      <li>
        <NavLink
        className="nav-item"
         to="/portfolio"
         style={ActiveLinkStyles}
         >
          <span className="nav-link">
            Portfolio
          </span>
        </NavLink>
      </li>
      {/* End li */}

      <li>
        <NavLink
        className="nav-item"
         to="/blog"
         style={ActiveLinkStyles}
         >
          <span className="nav-link">
            Blog
          </span>
        </NavLink>
      </li>
      {/* End li */}

      <li>
        <NavLink
        className="nav-item"
         to="/contact"
         style={ActiveLinkStyles}
         >
          <span className="nav-link">
            Contact
          </span>
        </NavLink>
      </li>
      {/* End li */}
    </ul>
  );
};

export default MegaMenu;
