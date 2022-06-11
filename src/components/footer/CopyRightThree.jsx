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

const CopyRightThree = () => {
  return (
    <div className="row">
      <div className="col-lg-4 order-lg-1 mb-20">
        <ul
          className="
              d-flex
              justify-content-center justify-content-lg-start
              footer-nav
            "
        >
          <li>
            <Link to="/terms-conditions">Privacy & Terms.</Link>
          </li>
          <li>
            <Link to="/contact-cs">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="col-lg-4 order-lg-3 mb-20">
        <ul
          className=" d-flex
              justify-content-center justify-content-lg-end
              social-icon"
        >
          {socialContent.map((val, i) => (
            <li key={i}>
              <a href={val.link} target="_blank" rel="noreferrer">
                <i className={`fa ${val.icon}`}></i>
              </a>
            </li>
          ))}
        </ul>
        {/* End .social-icon */}
      </div>
      <div className="col-lg-4 order-lg-2 mb-20">
        <p className="copyright text-center">
          Copyright @{new Date().getFullYear()}{" "}
          <a
            href="https://themeforest.net/user/ib-themes/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            ib-themes
          </a>{" "}
          inc.
        </p>
      </div>
    </div>
  );
};

export default CopyRightThree;
