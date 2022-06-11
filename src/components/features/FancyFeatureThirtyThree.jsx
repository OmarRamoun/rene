import React from "react";

const featuresContent = [
  {
    icon: "171",
    title: "Daily Updates",
    desc: `We daily have updates on the latest versions of the software`,
    delayAnimation: "",
  },
  {
    icon: "172",
    title: "Easy Cutomization",
    desc: `You can easily customize the interface of the software.`,
    delayAnimation: "100",
  },
  {
    icon: "173",
    title: "Fast Support",
    desc: `You can reach to our Support Team 24/7. We care about your needs even before you buy the software.`,
    delayAnimation: "200",
  },
];

const FancyFeatureThirtyThree = () => {
  return (
    <div className="row">
      {featuresContent.map((val, i) => (
        <div
          className="col-lg-4"
          data-aos="fade-up"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <div className="block-style-thirtyThree pr-lg-5 mt-40">
            <div className="icon">
              <img src={`images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h3 className="title">
              <span>{val.title}</span>
            </h3>
            <p>{val.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureThirtyThree;
