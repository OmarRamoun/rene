import React from "react";
import { Link } from "react-router-dom";

const socialContent = [
  {
    icon: "fa-facebook",
    link: "https://www.facebook.com/",
  },
  {
    icon: "fa-twitter",
    link: "https://twitter.com/",
  },
  {
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/",
  },
];

const FooterTwo = () => {
  return (
    <div className="row justify-content-between">
      <div
        className="col-lg-2 col-12 footer-about-widget"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <a href="index-customer-support.html" className="logo">
          <img src="images/logo/deski_03.svg" alt="brand" />
        </a>
      </div>
      {/* /.about-widget */}
      <div
        className="col-lg-2 col-md-3 col-sm-6 footer-list"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="50"
      >
        <h5 className="footer-title">Products</h5>
        <ul>
          <li>
            <Link to="/about-cs">Take the tour</Link>
          </li>
          <li>
            <Link to="/">Live chat</Link>
          </li>
          <li>
            <Link to="/solution-management">Self-service</Link>
          </li>
          <li>
            <Link to="/blog-details">Social</Link>
          </li>
          <li>
            <Link to="/blog-details">Mobile</Link>
          </li>
          <li>
            <Link to="/blog-details">Collaboration</Link>
          </li>
          <li>
            <Link to="/blog-details">deski Reviews</Link>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}
      <div
        className="col-lg-2 col-md-3 col-sm-6 footer-list"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <h5 className="footer-title">Services</h5>
        <ul>
          <li>
            <Link to="/blog-details">Web Design</Link>
          </li>
          <li>
            <Link to="/blog-details">Development</Link>
          </li>
          <li>
            <Link to="/blog-details">Wordpress</Link>
          </li>
          <li>
            <Link to="/blog-details">Online Marketing</Link>
          </li>
          <li>
            <Link to="/blog-details">Content</Link>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}
      <div
        className="col-lg-2 col-md-3 col-sm-6 footer-list"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="150"
      >
        <h5 className="footer-title">About us</h5>
        <ul>
          <li>
            <Link to="/about-cs">About us</Link>
          </li>
          <li>
            <Link to="/faq-details">Faq Details</Link>
          </li>
          <li>
            <Link to="/team-6">Team</Link>
          </li>
          <li>
            <Link to="/pricing-cs">Plan & Pricing</Link>
          </li>
          <li>
            <Link to="/blog-5">News</Link>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}
      <div
        className="col-lg-3 col-md-3 col-sm-6 address-list"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <h5 className="footer-title">Address</h5>
        <ul className="info">
          <li>
            <a href="mailto:ib-themes21@gmail.com">deskisupportinc@gmail.com</a>
          </li>
          <li>
            <a href="Tel: 7614123224" className="mobile-num">
              +761 412 3224
            </a>
          </li>
        </ul>
        <ul className="social-icon d-flex">
          {socialContent.map((val, i) => (
            <li key={i}>
              <a href={val.link} target="_blank" rel="noreferrer">
                <i className={`fa ${val.icon}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* /.footer-list */}
    </div>
    //.row
  );
};

export default FooterTwo;
