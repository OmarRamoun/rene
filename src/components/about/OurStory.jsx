const OurStory = () => {
  return (
    < div className="fancy-text-block-nine mt-130 md-mt-80" >
      <div className="shapes shape-one"></div>
      <div className="shapes shape-two"></div>
      <div className="shapes shape-three"></div>
      <div className="shapes shape-four"></div>
      <div className="container">
        <div className="title-style-two text-center mb-35 md-mb-10">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <p>Our Story</p>
              <h2>The world’s first easy to use project managment app</h2>
            </div>
          </div>
        </div>
        {/* End title-style-two */}

        <div className="row">
          <div className="col-xl-10 m-auto">
            <p
              className="text-meta"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              We created Rene for businesses that share our passion for minimalism and simplacity. For many of us, great project management isn’t a cost center — it’s an effective tool, and a competitive differentiator.
            </p>
            <p
              className="text-meta"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              But until 2022, there were no easy-to-use (from the get-go) project management app available that embodied our customer-centric values. All project managment tools in the market before that time quite literally treated each person like a number and made it far too difficult to build a long-term relationship. We felt a strong pull to make something different, and we did. We created Rene.
            </p>
          </div>
        </div>
        {/* End .row */}
      </div>
    </div >
  );
};

export default OurStory;
