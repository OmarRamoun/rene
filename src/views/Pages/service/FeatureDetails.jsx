import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../../../components/Helmet";
import Faq from "../../../components/faq/Faq";

const ServiceDetails = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet pageTitle="Features" />
      {/* End Page SEO Content */}

      <div className="fancy-hero-five">
        <div className="bg-wrapper">
          <div className="container">
            <div className="text-center row">
              <div className="col-xl-9 m-auto">
                <h1 className="heading">Web Design</h1>
                <p className="sub-heading space-xs font-gordita mt-15">
                  We are a creative company that focuses on establishing
                  long-term relationships with customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.bg-wrapper --> */}
      </div>
      {/* <!-- /.fancy-hero-five --> */}

      {/* =============================================
            Service Details One
        ==============================================  */}
      <div className="service-details-one pt-150 md-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 order-lg-last">
              <div className="details-wrapper pl-xl-5">
                <h2 className="font-gordita">
                  World best web design service provider.
                </h2>
                <p className="sub-heading font-gordita pt-30 pb-70 md-pb-40">
                  Commonly used in the graphic, prit quis due & publishing
                  indust for previewing lightly visual mockups.
                </p>
                <img
                  src="images/gallery/img_42.jpg"
                  alt="gallery"
                  className="img-meta w-100"
                />
                <p className="pt-40 pb-40">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas interdum, orci at dapibus, massa ante pharetra
                  tellus. Maecenas interdum, orci at euismod dapibus. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                  interdum.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="font-gordita pt-40">Our Goal</h4>
                    <ul className="list-item-one">
                      <li>Various analysis options.</li>
                      <li>Page Load (time, number of requests).</li>
                      <li>Big data analysis.</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h4 className="font-gordita pt-40">The Challange</h4>
                    <p>
                      Deski Web offers a complete lineup of features from any
                      major Maecena quis interdum, orci at euis dapibus, mass
                      ante pharetra tellus massa ante pharetra tellus.
                    </p>
                  </div>
                </div>
                {/* End .row */}
                <h3 className="font-gordita pt-90 pb-60 md-pt-50">
                  Any Questions find here.
                </h3>
                <Faq />
              </div>
              {/* <!-- /.details-wrapper --> */}
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 order-lg-first">
              <div className="sidebar md-mt-100">
                <div className="category-list">
                  <h4 className="font-gordita">Services</h4>
                  <ul>
                    <li>
                      <a href="#" className="active">
                        Web Design
                      </a>
                    </li>
                    <li>
                      <a href="#">Mockup</a>
                    </li>
                    <li>
                      <a href="#">Print Design</a>
                    </li>
                    <li>
                      <a href="#">Logo</a>
                    </li>
                    <li>
                      <a href="#">Mobile Application</a>
                    </li>
                    <li>
                      <a href="#">Branding</a>
                    </li>
                    <li>
                      <a href="#">Illusutration</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- /.category-list --> */}
                <div className="sidenote">
                  <p>
                    Evernote Web offers a complete lineup major linup browser
                  </p>
                  <span>- Rashed ka.</span>
                </div>
                <div className="share-option">
                  <h4 className="font-gordita">Share it. </h4>
                  <ul className="d-flex social-icon">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- /.sidebar --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.service-details-one --> */}

      {/* 
      =============================================
            Footer
        ============================================== */}
      <div className="footer-bg-wrapper">
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="fancy-short-banner-two">
          <div className="container">
            <div className="content-wrapper">
              <div
                className="
                  bg-wrapper
                  d-lg-flex
                  align-items-center
                  justify-content-between
                "
              >
                <h2 className="font-gilroy-bold">
                  Don’t find the answer? contact us for any query.
                </h2>
                <Link to="/contact-pm"> Contact us</Link>
                <div className="bubble-one"></div>
                <div className="bubble-two"></div>
                <div className="bubble-three"></div>
                <div className="bubble-four"></div>
                <div className="bubble-five"></div>
              </div>
              {/* /.bg-wrapper */}
            </div>
            {/*  /.content-wrapper */}
          </div>
          {/* /.container */}
        </div>
        {/* /.fancy-short-banner-two */}
      </div>
    </div>
  );
};

export default ServiceDetails;
