import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../../../components/Helmet";
import BlogStyle2 from "../../../components/blog/BlogStyle2";
import BlogSidebar from "../../../components/blog/BlogSidebar";

const BlogV6 = () => {
  return (
    <div className="main-page-wrapper">
      <Helmet pageTitle="Blog" />
      {/* End Page SEO Content */}

      {/* =============================================
				Fancy Hero Two
			==============================================  */}
      <div className="fancy-hero-three">
        <div className="bg-wrapper">
          <div className="container">
            <div className="page-title">Blog</div>
            <div className="row">
              <div className="col-xl-8 col-lg-10 m-auto">
                <h1 className="heading md-p0">Check our company inside news</h1>
              </div>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-two */}

      {/* =====================================================
            Feature Blog One
        ===================================================== */}
      <div className="blog-page-white-bg blog-v2">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 feature-blog-one width-lg">
              <BlogStyle2 />
              <div className="page-pagination-one pt-15">
                <ul className="d-flex align-items-center">
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-left"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="active">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li> &nbsp; ... &nbsp;</li>
                  <li>
                    <a href="#">13</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* /.page-pagination-one */}
            </div>
            {/* End .col */}
            <div className="col-lg-4 col-md-6">
              <BlogSidebar />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* /.feature-blog-one */}

      <div className="fancy-short-banner-two pt-130 md-pt-70">
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
              <Link to="/contact">Contact us</Link>
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
  );
};

export default BlogV6;
