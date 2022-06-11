import React from "react";
import Helmet from "../../../components/Helmet";
import PortfolioTwo from "../../../components/portfolio/PortfolioTwo";
import FooterSeven from "../../../components/footer/FooterSeven";
import CopyRightThree from "../../../components/footer/CopyRightThree";

const PortfolioV1 = () => {
  return (
    <div className="main-page-wrapper">
      <Helmet pageTitle="Portfolio" />
      {/* End Page SEO Content */}

      {/* =============================================
         Fancy Hero Six
        ==============================================  */}
      <div className="fancy-hero-three">
        <div className="container">
          <h1 className="heading">Our Portfolio</h1>
          <p className="sub-heading">
            An original way to show your works in a good appearance
          </p>
        </div>
      </div>
      {/* /.fancy-hero-six */}

      {/*  =============================================
            Fancy Portfolio Two
        ==============================================  */}
      <div className="fancy-portfolio-two lg-container">
        <div className="container">
          <div className="top-border bottom-border pb-130 md-pb-90">
            <PortfolioTwo />
            <div className="text-center mt-90 md-mt-50">
              <h2 className="contact-title font-rubik">
                Do you have any projects? <br />
                Contact us.
              </h2>
              <a href="#" className="theme-btn-five mt-35">
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-portfolio-two */}

    </div>
  );
};

export default PortfolioV1;
