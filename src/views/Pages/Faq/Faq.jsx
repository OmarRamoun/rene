import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const FaqContent = [
  {
    avatar: "img_43",
    title: "How to set up two-factor authentication (2FA)",
    writterName: "Jonny White",
    date: "12 apr, 2020",
  },
  {
    avatar: "img_44",
    title: "Can I sell raffle tickets using Deski?",
    writterName: "Jonny White",
    date: "12 apr, 2020",
  },
  {
    avatar: "img_45",
    title: "How do I send tickets as a PDF?",
    writterName: "Jonny White",
    date: "12 apr, 2020",
  },
  {
    avatar: "img_46",
    title: "How do I send invoices to my ticket buyers?",
    writterName: "Jonny White",
    date: "12 apr, 2020",
  },
  {
    avatar: "img_47",
    title: "How do I edit the ticket types?",
    writterName: "Jonny White",
    date: "12 apr, 2020",
  },
  {
    avatar: "img_48",
    title: "How do I edit the currency for my event?",
    writterName: "Jonny White",
    date: "12 apr, 2020",
  },
  {
    avatar: "img_49",
    title: "How can I schedule my event to go live at a future date?",
    writterName: "Jonny White",
    date: "12 apr, 2020",
  },
  {
    avatar: "img_50",
    title: "Can I include a seating plan?",
    writterName: "Jonny White",
    date: "12 apr, 2020",
  },
  {
    avatar: "img_51",
    title: "Can I use other ticket selling agencies at the same time?",
    writterName: "Jonny White",
    date: "12 apr, 2020",
  },
];

const Faq = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>Faq || Deski-Saas & Software React Template</title>
      </Helmet>
      {/* End Page SEO Content */}

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
              <div className="faqs-header pb-60 md-pb-50">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="d-flex">
                      <img
                        src="images/icon/48.svg"
                        alt="icon"
                        className="icon"
                      />
                      <div className="md-mb-30">
                        <h3>FAQs</h3>
                        <p className="collection-preview">
                          Selling tickets for a raffle, lottery or sweepstake is
                          prohibited on Eventsmatic.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="avatar d-flex align-items-center">
                      <img src="images/media/img_41.png" alt="media" />
                      <img src="images/media/img_42.png" alt="media" />
                      <span className="avatar_image avatar_fallback font-rubik">
                        +1
                      </span>
                    </div>
                    <p className="collection-info">
                      <span>63 articles</span> in this collection <br /> Written
                      by Jonny White, Emily Coddington and <span>1</span> other
                    </p>
                  </div>
                </div>
              </div>
              {/* /.faqs-header */}

              <div className="all-faqs">
                <div className="faqs-all-qus">
                  {FaqContent.map((item, i) => (
                    <Link
                      className="article-preview d-flex"
                      to="/faq-details"
                      key={i}
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <img
                        src={`images/media/${item.avatar}.png`}
                        alt="media"
                        className="avatar-img"
                      />
                      <div>
                        <h3 className="font-rubik">{item.title}</h3>
                        <div className="avatar-info">
                          Written by <span>{item.writterName}</span> <br />
                          {item.date}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                {/* /.faqs-all-qus  */}
              </div>
              {/*  /.all-faqs */}

              <div
                className="text-center more-faq-ask"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <h3 className="mb-35 font-rubik">Don’t find your answer?</h3>
                <a href="contact-us(light).html" className="theme-btn-one">
                  Contact us
                </a>
              </div>
              {/* End more-faq-ask */}
            </div>
          </div>
        </div>
      </div>
      {/* /.faqs-inner-page */}

    </div>
  );
};

export default Faq;
