import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../../components/contact/form/LoginForm";
import SubNav from "./SubNav";
import Copyright from "./Copyright";
import Helmet from "../../../components/Helmet";

const Login = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet pageTitle="Login" />
      {/* End Page SEO Content */}
      <div className="user-data-page clearfix d-lg-flex">
        <div className="illustration-wrapper d-flex align-items-center justify-content-between flex-column">
          <h3 className="font-rubik">
            Want your best managment <br />
            software? <Link to="/signup">sign up</Link>
          </h3>
          <div className="illustration-holder">
            <img
              src="images/assets/ils_08.svg"
              alt="illustration"
              className="illustration"
            />
            <img
              src="images/assets/ils_08.1.svg"
              alt="illustration"
              className="shapes shape-one"
            />
            <img
              src="images/assets/ils_08.2.svg"
              alt="illustration"
              className="shapes shape-two"
            />
          </div>
        </div>
        {/* /.illustration-wrapper */}

        <div className="form-wrapper">
          <SubNav />
          <div className="mt-80 md-mt-40">
            <h2>
              Hi buddy, welcome <br /> Back!
            </h2>
            <p className="header-info pt-30 pb-50">
              Still don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>

          <LoginForm />
          <Copyright />
        </div>
        {/* /.form-wrapper */}
      </div>
      {/* /.user-data-page */}
    </div>
  );
};

export default Login;
