import React from "react";

const FeaturesContent = [
  {
    bgColor: "#FFEBDB",
    icon: "68",
    title: "Secure & Trusted",
    desc: `Our Software was Built with Security in Mind. Our Clients Data are Fully Encrypted.`,
    dataDealy: "0",
  },
  {
    bgColor: "#E0F8F8",
    icon: "67",
    title: "Easy Customizable",
    desc: `Our Software is Easy to Customize and Modify. We Provide You with a Plethora of Options Out of the Box.`,
    dataDealy: "100",
  },
  {
    bgColor: "#F7EDFF",
    icon: "70",
    title: "Fast Support",
    desc: `Our Support Team is Always There for You. Ready to Answer All Your Questions 24/7.`,
    dataDealy: "200",
  },
];

const MainFeatures = () => {
  return (
    <div style={{justifyContent: "space-between"}} className="row align-items-center mx-2">
      {FeaturesContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.dataDealy}
          key={i}
          style={{borderWidth: "0"}}
        >
          <div className="block-style-fifteen px-4" style={{borderWidth: "0"}}>
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: val.bgColor }}
            >
              <img src={`images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h3>{val.title}</h3>
            <p>{val.desc}</p>
          </div>
          {/* /.block-style-ten */}
        </div>
      ))}
    </div>
  );
};

export default MainFeatures;
