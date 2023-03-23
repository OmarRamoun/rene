
const TextBlock = () => {
  return (
    <>
      <div className="row align-items-end">
        <div
          className="col-xl-5 col-lg-6 ml-auto order-lg-last"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <img src="images/icon/34.svg" alt="" className="icon" />
          <p className="font-rubik">
            Rene combines excellent human support, simplicity and automation that allow us to provide quality.
          </p>
          <div className="name sm-mb-40">
            Mike van Eckendonk.{" "}
            <span>
              CEO & Founder <br />
              Rene
            </span>
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6 order-lg-first">
          <div className="row align-items-end">
            <div
              className="col-6"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <img src="images/about/img_25.png" alt="" className="img-meta" />
            </div>
            <div
              className="col-6"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <img src="images/about/img_26.png" alt="" className="img-meta" />
            </div>
          </div>
        </div>
      </div>
      {/* End .row */}

      <div className="row">
        <div className="col-lg-10 ml-auto">
          <div className="img-gallery mt-60 md-mt-20">
            <div className="row">
              <div
                className="col-sm-5 sm-mb-20"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <img
                  src="images/about/media_34.jpg"
                  alt="media"
                  className="img-meta"
                />
              </div>
              <div
                className="col-sm-7"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <img
                  src="images/about/img_28.png"
                  alt="media"
                  className="img-meta"
                />
              </div>
            </div>
          </div>
          {/* /.img-gallery */}
        </div>
      </div>
      {/* End .row */}
    </>
  );
};

export default TextBlock;
