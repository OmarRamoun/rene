import React from "react";
import { Link } from "react-router-dom";

const FeatureContent = [
  {
    icon: "20",
    meta: "Smart Software",
    subTitle: `Our Software is based on AI techonology and that's the main reason it is so easy to use (it understands you)`,
    dataDelay: "0",
  },
  {
    icon: "21",
    meta: "Embeded Forms",
    subTitle: `Collect website leads with embedded forms and integrate easily.`,
    dataDelay: "100",
  },
  {
    icon: "22",
    meta: "Autoresponder",
    subTitle: `Send welcome email to your new subscribers with a code.`,
    dataDelay: "200",
  },
  {
    icon: "21",
    meta: "Embeded Forms",
    subTitle: `Collect website leads with embedded forms and integrate easily.`,
    dataDelay: "300",
  },
  {
    icon: "22",
    meta: "Autoresponder",
    subTitle: `Send welcome email to your new subscribers with a code.`,
    dataDelay: "400",
  },
  {
    icon: "20",
    meta: "Smart popups",
    subTitle: `Create customized popups and show the message at the lorem`,
    dataDelay: "500",
  },
];

const FeatureSixV2 = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.dataDelay}
        >
          <Link to="/service-details" className="block-style-five">
            <div className="icon">
              <img src={`images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h6 className="title">
              <span>{val.meta}</span>
            </h6>
            <p>{val.subTitle}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FeatureSixV2;
