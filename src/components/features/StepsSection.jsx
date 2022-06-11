import React from "react";

const FeatureContent = [
  {
    icon: "ils_15",
    meta: "Join Our Platform",
    subTitle: `Send Us a Request To Join The Platform To Be Able To Use The Software.`,
  },
  {
    icon: "ils_17",
    meta: "Download Software",
    subTitle: `Choose The Price Package That Suits You Or Get Lifetime Access.`,
  },
  {
    icon: "ils_16",
    meta: "Start Managing Projects",
    subTitle: `Start Managing Your Projects and Get The Best Results.`,
  },
];

const StepsSection = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="block-style-fourteen">
            <div className="illustration">
              <img src={`images/assets/${val.icon}.svg`} alt="icon" />
            </div>
            <div className="title">{val.meta}</div>
            <p className="font-rubik">{val.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepsSection;
