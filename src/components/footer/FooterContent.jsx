import React from "react";
import { Link } from "react-router-dom";

const linksFooterContent = [
  {
    itemName: "Home",
    routePath: "/",
  },
  {
    itemName: "Product",
    routePath: "/",
  },
  {
    itemName: "Pricing",
    routePath: "/",
  },
  {
    itemName: "About us",
    routePath: "/about",
  },
  {
    itemName: "Features",
    routePath: "/features",
  },
  {
    itemName: "Blog",
    routePath: "/blog",
  },
  {
    itemName: "Help & Support",
    routePath: "/login",
  },
  {
    itemName: "API documentation",
    routePath: "/",
  },
];

const legalFooterContent = [
  {
    itemName: "Terms of use",
    routePath: "/terms-conditions",
  },
  {
    itemName: "Terms & conditions",
    routePath: "/terms-conditions",
  },
  {
    itemName: "Privacy policy",
    routePath: "/terms-conditions",
  },
  {
    itemName: "Cookie policy",
    routePath: "",
  },
];

const teamFooterContent = [
  {
    itemName: "Take the tour",
    routePath: "/about",
  },
  {
    itemName: "Team",
    routePath: "/team",
  },
  {
    itemName: "Self Service",
    routePath: "/features",
  },
  {
    itemName: "News",
    routePath: "/blog",
  },
  {
    itemName: "About us",
    routePath: "/about",
  },
  {
    itemName: "Contact",
    routePath: "/contact",
  },
];

const FooterContent = () => {
  return (
    <div className="row justify-content-end">
      <div
        className="col-xl-4 col-lg-3 col-12 footer-about-widget"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="logo" style={{ marginBottom: "30px" }}>
          <a href="/">
            <img style={{ width: "160px" }} src="images/logo/logo.png" alt="" />
          </a>
        </div>
        <ul className="font-rubik mt-10">
          <li>
            <a href="mailto:contact@omarramoun.com">contact@omarramoun.com</a>
          </li>
          <li>
            <a href="tel:+201095219204">+2010 95 219 204</a>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}

      <div
        className="col-lg-3 col-md-4 footer-list"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="50"
      >
        <h5 className="footer-title font-slab">Links</h5>
        <ul>
          {linksFooterContent.map((list, i) => (
            <li key={i}>
              <Link to={list.routePath}>{list.itemName}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* /.footer-list */}
      <div
        className="col-lg-3 col-md-4 footer-list"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <h5 className="footer-title font-slab">Legal</h5>
        <ul>
          {legalFooterContent.map((list, i) => (
            <li key={i}>
              <Link to={list.routePath}>{list.itemName}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* /.footer-list */}

      <div
        className="col-xl-2 col-lg-3 col-md-4 footer-list"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="150"
      >
        <h5 className="footer-title font-slab">Team</h5>
        <ul className="pr-5">
          {teamFooterContent.map((list, i) => (
            <li key={i}>
              <Link to={list.routePath}>{list.itemName}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* /.footer-list */}
    </div>
  );
};

export default FooterContent;
