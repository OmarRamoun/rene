import React from "react";
import Helmet from "../../../components/Helmet";
import { Link } from "react-router-dom";
import SignUpForm from "../../../components/contact/form/SignUpForm";
import SubNav from "./SubNav";
import Copyright from "./Copyright";

const SignUp = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet pageTitle="Sign Up" />
      {/* End Page SEO Content */}
      <div className="user-data-page clearfix d-lg-flex">
        <div className="illustration-wrapper d-flex align-items-center justify-content-between flex-column">
          <h3 className="font-rubik">
            We have a “strategic” plan its <br /> called doing things.
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
        {/* /.illustration-wrapper  */}

        <div className="form-wrapper">
          <SubNav />
          {/* End d-flex */}
          <div className="mt-30">
            <h2>Join with thousands of startup!</h2>
            <p className="header-info pt-30 pb-50">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
          <SignUpForm />
          {/* End Signup Form */}
          <Copyright />
          {/* End .copyright */}
        </div>
        {/* /.form-wrapper */}
      </div>
      {/* /.user-data-page */}
    </div>
  );
};

export default SignUp;
