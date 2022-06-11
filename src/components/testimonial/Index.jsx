import React from 'react';
import Testimonial from './Testimonial';


const TestomnialsThumbsStyles = {
  borderRadius: "50%",
  width: "100px",
};

const Index = () => {
  return (
    <div className="client-feedback-slider-three mb-250 ">
    <div className="container">
      <div className="title-style-five text-center mb-80 md-mb-50">
        <div className="row">
          <div className="col-lg-7 col-md-9 m-auto">
            <h2 data-aos="fade-up" data-aos-duration="1200">
              <span>Check what’s our client </span>say about us.
            </h2>
          </div>
        </div>
      </div>
      {/* End title */}
      <div className="row">
        <div className="col-xl-7 col-lg-9 m-auto">
          <div className="testimonial-slider-wrapper">
            <img src="images/icon/65.svg" alt="icon" className="m-auto" />
            <div className="clientSliderThree">
              <Testimonial />
            </div>
          </div>
          {/* /.testimonial-slider-wrapper */}
        </div>
      </div>
    </div>
    {/* /.container */}
    <img
      style={{...TestomnialsThumbsStyles, width: "50px"}}
      src="images/media/avatar-1.jpg"
      alt="media"
      className="shapes shape_1"
    />
    <img
      style={{...TestomnialsThumbsStyles, width: "100px"}}
      src="images/media/avatar-3.jpg"
      alt="media"
      className="shapes shape_2"
    />
    <img
      style={{...TestomnialsThumbsStyles, width: "70px"}}
      src="images/media/avatar-5.jpg"
      alt="media"
      className="shapes shape_3"
    />
    <img
      style={{...TestomnialsThumbsStyles, width: "100px"}}
      src="images/media/avatar-4.jpg"
      alt="media"
      className="shapes shape_4"
    />
    <img
      style={{...TestomnialsThumbsStyles, width: "180px"}}
      src="images/media/avatar-2.jpg"
      alt="media"
      className="shapes shape_5"
    />
    <img
      style={{...TestomnialsThumbsStyles, width: "80px"}}
      src="images/media/avatar-6.jpg"
      alt="media"
      className="shapes shape_6"
    />
  </div>
  );
};

export default Index;
