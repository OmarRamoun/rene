import React from "react";

const featuresContent = [
  {
    icon: "162",
    title: "Work with your team",
    desc: `Rene offers a complete lineup of features that help teams work and manage projects together asyncronously.`,
    delayAnimation: "",
  },
  {
    icon: "150",
    title: "Simple to use",
    desc: `Rene was made so simple and easy to use with a very intuitive interface that removes any learning curves.`,
    delayAnimation: "100",
  },
  {
    icon: "151",
    title: "Save time & Effort",
    desc: `Because of the minimalism of Rene and It's simple Interface. You can start your next project as soon as possible.`,
    delayAnimation: "200",
  },
];

const FancyFeatureTewentyEight = () => {
  return (
    <div className="row justify-content-between">
      {featuresContent.map((val, i) => (
        <div
          className="col-xl-3 col-md-4"
          data-aos="fade-up"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <div className="block-style-twentyEight text-center mt-40">
            <div className="icon d-flex justify-content-center align-items-end">
              <img src={`images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h4>{val.title}</h4>
            <p>{val.desc}</p>
          </div>
          {/* /.block-style-twentyEight */}
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureTewentyEight;
