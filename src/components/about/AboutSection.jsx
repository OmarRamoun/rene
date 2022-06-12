import React from "react";

const AboutSection = () => {
  return (
    <div className="fancy-text-block-nineteen mt-250 mb-200 md-mt-150 md-mb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1200">
            <div className="text-wrapper">
              <div className="client-info font-rubik">
                <span>About</span> Us
              </div>
              <div className="title-style-five">
                <h2>
                  Best <span>Project&nbsp;Managment</span> Software Platform.
                </h2>
              </div>
              <p className="font-rubik">
                We created Rene for businesses that share our passion for minimalism and simplacity. For many of us, great project management isn’t a cost center — it’s an effective tool, and a competitive differentiator.
              </p>
              <p className="font-rubik">
                We aim to solve project managment software problems from the roots.
              </p>
              <div className="name font-slab">Isra Ramoun, CEO</div>
            </div>
            {/* /.text-wrapper */}
          </div>
          {/* End .col */}

          <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1200">
            <div className="img-holder md-mt-80">
              <img src="images/about/img_57.png" alt="media" />
              <img
                src="images/shape/60.svg"
                alt="shape"
                className="shapes shape-one"
              />
              <img
                src="images/shape/60.svg"
                alt="shape"
                className="shapes shape-two"
              />
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
