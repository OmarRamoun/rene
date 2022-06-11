import React from 'react';
import Pricing from './Pricing';

const Index = () => {
  return (
    <div className="pricing-section-three mt-250 mb-200 md-mt-150 md-mb-150">
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
        <div className="title-style-five text-center mb-50 md-mb-40">
          <h6>Our Pricing</h6>
          <div className="row">
            <div className="col-lg-9 m-auto">
              <h2>Unbeatable prices, no contracts, simple & easy</h2>
            </div>
          </div>
        </div>

        <div className="pricing-table-area-three">
          <Pricing />
        </div>
        {/* /.pricing-table-area-three */}
      </div>
      {/* ./container */}
    </div>
  )
}

export default Index;
