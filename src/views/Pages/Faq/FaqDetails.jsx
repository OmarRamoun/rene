import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/FooterBasicBasic";
import CopyRight from "../../../components/footer/CopyRight";

const FaqDetails = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>Faq Details || Deski-Saas & Software React Template</title>
      </Helmet>
      {/* End Page SEO Content */}

      <Header />
      {/* End Header */}

      {/* =============================================
            Fancy Hero One
        ==============================================  */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto">
              <h2 className="font-rubik">Help & Support</h2>
              <p className="sub-heading">
                Advice and answers from our expert and proffesional deski Team
              </p>
            </div>
          </div>
          <form onClick={handleSubmit} className="search-form">
            <input type="text" placeholder="Search for articles..." />
            <button>
              <img src="images/icon/47.svg" alt="icon" />
            </button>
          </form>
        </div>
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
      </div>
      {/* /.fancy-hero-one */}

      {/* =============================================
            FAQS
        ==============================================  */}
      <div className="faqs-inner-page">
        <img
          src="images/shape/66.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <div className="all-faqs">
                <div className="faqs-all-qus m-0">
                  <div className="article-preview mb-0">
                    <div className="d-flex">
                      <img
                        src="images/media/img_43.png"
                        alt="media"
                        className="avatar-img"
                      />
                      <div>
                        <h3 className="font-rubik">
                          How to set up two-factor authentication (2FA)
                        </h3>
                        <div className="avatar-info">
                          Written by <span>Jonny White</span> <br />
                          12 apr, 2020
                        </div>
                      </div>
                    </div>
                    {/* End .d-flex */}

                    <div className="article-details">
                      <p>
                        To activate 2FA you will need an authenticator app
                        installed on your smartphone. This could be Google
                        Authenticator or Authy, both available for iOs and
                        Android.
                      </p>
                      <ul className="list-meta">
                        <li>
                          Go to ‘Account settings’ from your Ticket Tailor
                          dashboard.
                        </li>
                        <li>
                          Under the heading ‘Two-factor authentication’ click
                          the button labelled ‘Activate 2FA’.
                        </li>
                        <li>
                          From your authenticator app on your phone, add a new
                          login and it will ask you to scan the QR code shown
                          here. Scan the QR code.
                        </li>
                        <li>
                          The app will generate a code. Enter that code in the
                          box below and click 'Activate 2FA'.
                        </li>
                      </ul>
                      <p>
                        <b>Please note:</b> If you lose access to your 2FA app
                        you will need to contact customer support to go through
                        a security questionnaire and have your account unlocked.
                      </p>

                      <div className="reaction-wrapper">
                        <h4>Did this answer your question?</h4>
                        <div
                          className="d-flex align-items-center justify-content-center"
                          data-aos="zoom-in"
                          data-aos-duration="1200"
                          data-aos-delay="50"
                        >
                          <button>
                            <img src="images/icon/happy.svg" alt="icon" />
                          </button>
                          <button>
                            <img src="images/icon/sad.svg" alt="icon" />
                          </button>
                          <button>
                            <img src="images/icon/surprised.svg" alt="icon" />
                          </button>
                        </div>
                      </div>
                      {/* /.reaction-wrapper */}
                    </div>
                    {/*  /.article-details */}
                  </div>
                  {/* /.article-preview  */}
                </div>
                {/* /.faqs-all-qus */}
              </div>
              {/* /.all-faqs */}
            </div>
          </div>
        </div>
      </div>
      {/* /.faqs-inner-page */}

      <footer className="theme-footer-one pt-130 md-pt-70">
        <div className="top-footer">
          <div className="container">
            <Footer />
          </div>
          {/* /.container */}
        </div>
        {/* /.top-footer */}

        <div className="container">
          <div className="bottom-footer-content">
            <CopyRight />
          </div>
          {/*  /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-one */}
    </div>
  );
};

export default FaqDetails;
