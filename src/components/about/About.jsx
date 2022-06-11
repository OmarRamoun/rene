import React from "react";

const About = () => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1200">
        <img src="images/media/img_57.png" alt="about" className="m-auto" />
      </div>
      {/* End .col */}

      <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1200">
        <div className="text-wrapper">
          <div className="client-info font-rubik">
            Over <span>150,000+ client</span>
          </div>
          <div className="title-style-five">
            <h2>
              <span>Best event & online</span> ticket platform.
            </h2>
          </div>
          <p className="font-rubik">
            Things go wrong. You’ll have questions. We understand. So we have
            people, not bots, on hand to help.
          </p>
          <p className="font-rubik">
            We aim to answer any query in less than 10 minutes.
          </p>
          <div className="name font-slab">Mitchell Garner</div>
        </div>
        {/* /.text-wrapper */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default About;
