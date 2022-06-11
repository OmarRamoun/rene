import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../../components/header/Header";
import { Link } from "react-router-dom";
import TeamFour from "../../../../components/about/Team";
import Footer from "../../../../components/footer/FooterBasicBasic";
import CopyRight from "../../../../components/footer/CopyRight";

const Team4 = () => {
  return (
    <div className="main-page-wrapper ">
      <Helmet>
        <title>Team V4 || Deski-Saas & Software React Template</title>
      </Helmet>
      {/* End Page SEO Content */}

      <Header />
      {/* End Header */}

      {/*  =============================================
				Fancy Hero One
			============================================== */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-11 m-auto">
              <h2 className="font-rubik">We’ve Most Talented Team Members</h2>
            </div>
            <div className="col-xl-9 col-lg-11 m-auto">
              <p className="font-rubik">
                With deski, get all kind of business solution to start your
                journey
              </p>
            </div>
          </div>
        </div>
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
      </div>
      {/* /.fancy-hero-one */}

      {/* =====================================================
            Team Section Five
        ===================================================== */}
      <div className="team-section-five team-section-two ">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-80 md-mb-10">
            <div className="col-lg-8">
              <div className="title-style-two">
                <p>Our Team</p>
                <h2>Our talented team member waiting to serve.</h2>
              </div>
            </div>
            {/* End .col */}
            <div className="col-lg-4 d-lg-flex justify-content-end">
              <a href="team-V1.html" className="theme-btn-three md-mt-20">
                See All Members
              </a>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
          <div className="row">
            <TeamFour />
          </div>
        </div>
      </div>
      {/* /.team-section-five */}

      {/* =====================================================
            Fancy Short Banner Eleven
        ===================================================== */}
      <div className="fancy-short-banner-eleven">
        <div className="container">
          <div className="border-bottom pt-130 pb-150 md-pt-80 md-pb-80">
            <div className="row">
              <div className="col-lg-8 col-md-9 m-auto">
                <h2
                  className="font-rubik"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Want to be a part of our talented team?
                </h2>
                <Link
                  className="theme-btn-one btn-lg mt-50 md-mt-30"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                  to="/contact-doc"
                >
                  SEND YOUR CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  /.fancy-short-banner-eleven  */}

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

export default Team4;
