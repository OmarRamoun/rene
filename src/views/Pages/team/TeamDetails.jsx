import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../../components/header/Header";
import Footer from "../../../../components/footer/FooterBasicBasic";
import CopyRight from "../../../../components/footer/CopyRight";
import TeamDetailsSlider from "../../../../components/team/TeamDetailsSlider";

const TeamDetailsV2 = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>Team Details V2 || Deski-Saas & Software React Template</title>
      </Helmet>
      {/* End Page SEO Content */}

      <Header />
      {/* End Header */}

      {/* =============================================
          Fancy Hero Two
        ==============================================  */}
      <div className="fancy-hero-five  bg-white">
        <img
          src="images/shape/95.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/96.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <div className="bg-wrapper">
          <div className="container">
            <div className="col-xl-9 col-lg-11 m-auto text-center">
              <h6 className="page-title">Team Details V2</h6>
              <h1 className="heading">
                <span>
                  Single Profile
                  <img src="images/shape/line-shape-11.svg" alt="" />
                </span>{" "}
                Slider
              </h1>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-two */}

      {/* 	=====================================================
				Team Details
			===================================================== */}
      <div className="team-details mb-50 md-mb-10">
        <div className="container position-relative arrow-middle-center">
          <TeamDetailsSlider />
          {/* Team Details Gallery */}
        </div>
        <img
          src="images/shape/214.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/215.svg"
          alt="shape"
          className="shapes shape-two"
        />
      </div>
      {/* /.team-details */}

      {/* 	=====================================================
            Footer Style One
        ===================================================== */}
      <footer className="theme-footer-one pt-130 md-pt-70">
        <div className="top-footer">
          <div className="container">
            <Footer />
          </div>
          {/* /.container */}
        </div>
        {/* /.top-footer */}

        <div className="container">
          <div className="bottom-footer-content">
            <CopyRight />
          </div>
          {/*  /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-one */}
    </div>
  );
};

export default TeamDetailsV2;
