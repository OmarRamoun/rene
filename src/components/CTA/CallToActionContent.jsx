import React from "react";
import FormEvent from "../form/FormEvent";
import { Link } from "react-router-dom";

const CallToActionContent = () => {
  return (
    <>
      <div className="title-style-five text-center">
        <h2>
          <span>Sign up & get started</span>
        </h2>
      </div>
      <div className="row">
        <div className="col-xl-7 col-lg-8 col-md-9 m-auto">
          <p className="font-rubik sub-heading">
            Our Software is made for you - & loved by everyone.
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
      <div className="row">
        <div className="col-xl-7 col-lg-8 col-md-10 m-auto">
          <FormEvent />
          <p className="info-text">
            Already a member? <Link to="/login">Sign in.</Link>
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default CallToActionContent;
