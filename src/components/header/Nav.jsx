import { Link } from "react-router-dom";
import MegaMenu from "./mega-menu/MegaMenu";

const Nav = () => {
  return (
    <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
      <div className="container nav-container">
        <div
          className="navbar-collapse collapse"
          id="navbarSupportedContent"
        >
          <div className="d-lg-flex align-items-center">
            <MegaMenu />
            {/* End MegaMenu */}

            <ul className="right-button-group d-flex align-items-center justify-content-center">
              <li>
                <Link to="/login" className="signIn-action">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="theme-btn-five">
                  Register
                </Link>
              </li>
            </ul>
            {/* End right-button-group  */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
