import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet";
import Logo from "./Pages/miscellaneous/Logo";

const NotFound = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet  pageTitle="Not Found" />
      {/* End Page SEO Content */}

      <div className="error-page d-lg-flex align-items-center">
        <div className="img-holder order-lg-last">
          <img
            src="images/media/404.svg"
            alt="media"
            className="w-100 illustration"
          />
          <img
            src="images/media/404-q.svg"
            alt="media"
            className="shapes qus"
          />
        </div>
        <div className="text-wrapper order-lg-first">
          <Logo width="200px" />
          <h1 className="font-slab mt-8">
            Sorry, <br />
            The Page Can’t <br />
            be Found.
          </h1>
          <p className="font-rubik">
            The page you are looking for might have been removed had its name changed or is temporarily unavailable.
          </p>

          <Link
            to="/"
            className="back-home font-rubik d-flex align-items-center justify-content-center"
          >
            <span>Back to Home</span>
            <img src="images/icon/53.svg" alt="icon" />
          </Link>
          
        </div>
        {/* /.text-wrapper */}
      </div>
      {/* /.error-page */}
    </div>
  );
};

export default NotFound;
