import React from "react";
import { Link } from "react-router-dom";

const PricingContent = [
  {
    title: "Free Demo",
    price: "0",
    priceMeta: "per user/month",
    packageName: "pc1",
    skewClass: "skew-right",
    priceList: [
      {
        list: "1 User",
        listClass: "",
      },
      {
        list: "Basic Widget Customization",
        listClass: "",
      },
      {
        list: "24/7 Customer Support",
        listClass: "",
      },
      {
        list: "Ticketing System",
        listClass: "disable",
      },
      {
        list: "Data Security",
        listClass: "disable",
      },
    ],
    animatinDelay: "0",
  },
  {
    title: "Yearly",
    price: "5.65",
    priceMeta: "per user/month",
    packageName: "pc3",
    skewClass: "skew-left",
    priceList: [
      {
        list: "Unlimited Users",
        listClass: "",
      },
      {
        list: "All Widget Customization",
        listClass: "",
      },
      {
        list: "24/7 Customer Support",
        listClass: "",
      },
      {
        list: "Ticketing System",
        listClass: "",
      },
      {
        list: "Data Security",
        listClass: "",
      },
    ],
    animatinDelay: "200",
  },
  {
    title: "Monthly",
    price: "10.99",
    priceMeta: "per user/month",
    packageName: "pc2",
    skewClass: "skew-right",
    priceList: [
      {
        list: "Unlimited Users",
        listClass: "",
      },
      {
        list: "All Widget Customization",
        listClass: "",
      },
      {
        list: "24/7 Customer Support",
        listClass: "",
      },
      {
        list: "Ticketing System",
        listClass: "",
      },
      {
        list: "Data Security",
        listClass: "",
      },
    ],
    animatinDelay: "100",
  },
];

const Pricing = () => {
  return (
    <div className="row justify-content-center">
      {PricingContent.map((item, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={item.animatinDelay}
        >
          <div className={`pr-table-wrapper ${item.skewClass}`}>
            <div className={`pack-name font-slab ${item.packageName}`}>
              <span>{item.title}</span>
            </div>
            <div className="price font-slab">${item.price}</div>
            <p className="user-condition">{item.priceMeta}</p>
            <img src="images/shape/114.svg" alt="shape" className="line" />
            <ul>
              {item.priceList.map((val, i) => (
                <li className={val.listClass} key={i}>
                  {val.list}
                </li>
              ))}
            </ul>
            <Link to="/signup" className="subscribe-btn font-rubik">
              Subscribe Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
