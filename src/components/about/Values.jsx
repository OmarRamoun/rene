import FancyFeatures from "./FancyFeatures";

const Values = () => {
  return (
    <div className="fancy-feature-four mt-200 md-mt-100">
      <div className="bg-wrapper">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <img
          src="images/shape/47.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <div className="container">
          <div className="title-style-two text-center mb-60 md-mb-40">
            <div className="row">
              <div className="col-xl-8 col-lg-9 m-auto">
                <p>Our Values</p>
                <h2>We’r driven by our values</h2>
                <div className="sub-text">
                  Rene stand with friendly interface with lots of features
                  that help our team and cutomers to collbarate easily.
                </div>
              </div>
            </div>
          </div>
          {/* End .title-style-two */}
          <div className="row justify-content-center">
            <FancyFeatures />
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* /.bg-wrapper */}
    </div>
  );
};

export default Values;
