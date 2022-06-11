import React from 'react';
import Faq from './Faq';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="faq-section-four">
      <img
        src="images/shape/120.svg"
        alt="shape"
        className="shapes shape-one"
      />
      <img
        src="images/shape/121.svg"
        alt="shape"
        className="shapes shape-two"
      />
      <div className="container">
        <div className="title-style-five text-center mb-80 md-mb-60">
          <h6>FAQ</h6>
          <h2>
            <span>Question & Answer</span>
          </h2>
        </div>

        <div className="row">
          <div className="col-xl-9 col-lg-10 m-auto">
            <Faq />
          </div>
        </div>
        <div
          className="text-center mt-60 md-mt-50"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h3 className="font-rubik pb-30">Don’t find your answer?</h3>
          <Link className="theme-btn-five" to="/contact">
            Contact us
          </Link>
        </div>
      </div>
      {/* /.container */}
    </div>
  );
};

export default Index
