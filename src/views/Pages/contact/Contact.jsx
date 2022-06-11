import React from "react";
import Helmet from "../../../components/Helmet";
import ContactAddress from "../../../components/contact/address/ContactAddress";
import ContactForm from "../../../components/contact/form/ContactForm";
import CallToActionTwo from "../../../components/CTA/CallToAction";

const ContactDocumentation = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet pageTitle="Contact" />
      {/* End Page SEO Content */}

      {/* =============================================
				Fancy Hero Four
			==============================================  */}

      <div className="fancy-hero-three bg-doc space-fix">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-11 col-md-10 m-auto">
                <h6>Contact us</h6>
                <h2>Feel free to contact us or just say hi!</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-four */}

      {/*  =============================================
				Contact Style Two
			==============================================  */}
      <div className="contact-style-two" style={{marginTop: "100px"}}>
        <div className="container">
          <div className="contact-info-wrapper">
            <ContactAddress />
            <img
              src="images/shape/64.svg"
              alt="shape"
              className="shapes shape-one"
            />
            <img
              src="images/shape/65.svg"
              alt="shape"
              className="shapes shape-two"
            />
          </div>
          {/* /.contact-info-wrapper */}

          <div className="form-style-classic mt-200 md-mt-80">
            <ContactForm />
          </div>
        </div>
        {/* /.contact-style-two */}

        <div className="fancy-short-banner-five m0 pt-150 md-pt-100">
          <div className="container">
            <div className="bg-wrapper">
              <CallToActionTwo />
            </div>
            {/* /.bg-wrapper */}
          </div>
          {/* /.container */}
        </div>
        {/* /.fancy-short-banner-four */}

      </div>
    </div>
  );
};

export default ContactDocumentation;
