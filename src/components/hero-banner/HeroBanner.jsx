import React from "react";
import { Link } from "react-router-dom";
import MainFeatures from "../features/MainFeatures";

const Hero = () => {
  return (
    <div className="hero-banner-four">
      <img
        src="images/shape/100.svg"
        alt="shape"
        className="shapes shape-four"
      />
      <img
        src="images/shape/101.svg"
        alt="shape"
        className="shapes shape-five"
      />
      <img
        src="images/shape/102.svg"
        alt="shape"
        className="shapes shape-six"
      />
      <img
        src="images/shape/103.svg"
        alt="shape"
        className="shapes shape-seven"
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-last">
            <div className="illustration-holder">
              <img
                src="images/assets/ils_14.svg"
                alt="shape"
                className="illustration"
              />
              <img
                src="images/assets/ils_14.1.svg"
                alt="shape"
                className="shapes shape-one"
              />
              <img
                src="images/assets/ils_14.2.svg"
                alt="shape"
                className="shapes shape-two"
              />
              <img
                src="images/assets/ils_14.3.svg"
                alt="shape"
                className="shapes shape-three"
              />
            </div>
            <p className="review-text">
              Over <span>100,000+ client</span> all over the world.
            </p>
          </div>
          {/* End .col */}

          <div className="col-lg-6 order-lg-first">
            <div className="text-wrapper">
              <h1 data-aos="fade-up" data-aos-duration="1200">
                Build your Next <span>Product</span> with Rene.
              </h1>
              <p
                className="sub-text"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                Rene delivered blazing fast, striking soludtion.
              </p>
              <Link
                to="/login"
                className="theme-btn-five"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                {" "}
                Let’s get started
              </Link>
            </div>
            {/* /.text-wrapper */}
          </div>
          {/* End .col */}
        </div>
      </div>

      <div className="fancy-feature-eight mt-160 md-mt-100">
        <div className="container">
          <div className="bg-wrapper">
            <MainFeatures />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
