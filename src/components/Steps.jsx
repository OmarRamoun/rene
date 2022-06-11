import StepsSection from "./features/StepsSection";

const Steps = () => {
  return (
    <div className="fancy-feature-nine">
      <img
        src="images/shape/107.svg"
        alt="shape"
        className="shapes shape-one"
      />
      <img
        src="images/shape/108.svg"
        alt="shape"
        className="shapes shape-two"
      />
      <img
        src="images/shape/109.svg"
        alt="shape"
        className="shapes shape-three"
      />
      <img
        src="images/shape/110.svg"
        alt="shape"
        className="shapes shape-four"
      />
      <img
        src="images/shape/111.svg"
        alt="shape"
        className="shapes shape-five"
      />
      <img
        src="images/shape/112.svg"
        alt="shape"
        className="shapes shape-six"
      />

      <div className="container">
        <div className="title-style-five text-center mb-60 md-mb-30">
          <h6>GET STARTED IN MINUTES</h6>
          <h2>
            <span>3 simple & easy step to launch.</span>
          </h2>
        </div>
        {/* End title */}

        <StepsSection />
      </div>
    </div>
  );
};

export default Steps;


