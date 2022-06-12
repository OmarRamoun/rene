import React from "react";
import Helmet from "../../../components/Helmet";
// import FancyVideoFive from "../../../components/video/FancyVideoFive";
import CounterThree from "../../../components/counter/CounterFour";
import FooterTwo from "../../../components/footer/FooterTwo";
import CopyRightTwo from "../../../components/footer/CopyRightTwo";
import FeatureSixV2 from "../../../components/features/FeatureSixV2";
import CallToActionThree from "../../../components/CTA/CallToAction";
import FancyFeatureThirtyThree from "../../../components/features/FancyFeatureThirtyThree";

const Features = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet pageTitle="Features" />
      {/* End Page SEO Content */}

      <div className="fancy-hero-three">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="shapes shape-five"></div>
        <div className="shapes shape-six"></div>
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-10 m-auto">
                <h1 className="heading">Our Services</h1>
                <p className="sub-heading">
                  Rene helps teams of all sizes get better at delivering their projects Asap.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper  */}
      </div>
      {/* /.fancy-hero-three */}

      <div className="fancy-text-block-eleven mt-200 md-mt-100">
        <div className="container">
          {/* <FancyVideoFive /> */}

          <div className="mt-70">
            <div className="container">
              <FancyFeatureThirtyThree />
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-text-block-eleven */}

      {/* =============================================
            Fancy Feature Six
        ============================================== */}
      <div className="fancy-feature-four mt-140 md-mt-70">
        <div className="bg-wrapper">
          <div className="shapes shape-one"></div>
          <div className="shapes shape-two"></div>
          <div className="shapes shape-three"></div>
          <div className="shapes shape-four"></div>
          <div className="shapes shape-five"></div>
          <img
            src="images/shape/51.svg"
            alt="shape"
            className="shapes shape-six"
          />
          <div className="container">
            <div className="title-style-two text-center mb-85 md-mb-40">
              <h2>
                <span>
                  Explore Services
                  <img src="images/shape/line-shape-2.svg" alt="shape" />
                </span>
              </h2>
              <div className="sub-text mt-15">
                Get to know all Rene features, that are part of the complex multi-channel
              </div>
            </div>
            {/* End .title */}
            <FeatureSixV2 />
          </div>
        </div>
      </div>
      {/* /.fancy-feature-six */}

      {/* =====================================================
            Fancy Text block Twelve
        ===================================================== */}
      <div className="fancy-text-block-twelve mt-170 md-mt-100">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="text-wrapper">
                <div className="title-style-three">
                  <h6>Why us?</h6>
                  <h2>
                    <span>
                      Why your should
                      <img src="images/shape/line-shape-6.svg" alt="" />
                    </span>
                    choose Rene.
                  </h2>
                </div>
                <p className="sub-text pb-35">
                  A project managment Saas (Software as a Service) is a tool, primarily for customer service. It helps customer representativ inquiries from one interface
                  without any struggles.
                </p>
                <ul className="list-item-one">
                  <li>Amazing communication.</li>
                  <li>Best trendinf designing experience.</li>
                  <li>Email & Live chat.</li>
                </ul>
              </div>
              {/* <!-- /.text-wrapper --> */}
            </div>
            {/* End .col-6 */}

            <div
              className="col-lg-5 ml-auto"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="img-gallery">
                <img src="images/media/darwin_center.jpg" alt="" />
                <img
                  src="images/shape/53.svg"
                  alt="shape"
                  className="shapes shape-one"
                />
                <img
                  src="images/shape/52.svg"
                  alt="shape"
                  className="shapes shape-two"
                />
              </div>
              {/* <!-- /.img-gallery --> */}
            </div>
            {/* End col-lg-5 */}
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-text-block-twelve --> */}

      {/* =====================================================
        Fancy Short Banner Three
        ===================================================== */}
      <div className="fancy-short-banner-three mt-200 md-mt-150">
        <div className="container">
          <div className="bg-wrapper">
            <CallToActionThree />
          </div>
          {/* /.bg-wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-short-banner-four */}
    </div>
  );
};

export default Features;
