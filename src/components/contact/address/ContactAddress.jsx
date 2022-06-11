import React from "react";

const socialContent = [
  {
    icon: "fa-facebook",
    link: "https://www.facebook.com/",
  },
  {
    icon: "fa-twitter",
    link: "https://twitter.com/",
  },
  {
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/",
  },
];

const ContactAddress = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-4 col-sm-6 d-lg-flex">
        <div className="address-info">
          <div className="icon d-flex align-items-end">
            <img src="images/icon/44.svg" alt="icon" />
          </div>
          <div className="title">Location</div>
          <p className="font-rubik">
            Melbourne, R. Market <br /> 1201 VIC
          </p>
        </div>{" "}
        {/* /.address-info  */}
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-sm-6 d-lg-flex">
        <div className="address-info">
          <div className="icon d-flex align-items-end">
            <img src="images/icon/45.svg" alt="icon" />
          </div>
          <div className="title">Contact</div>
          <p className="font-rubik">
            bawejkor@duwvude.gov <br />
            (779) 564-1593
          </p>
        </div>{" "}
        {/* /.address-info  */}
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-sm-6 d-lg-flex">
        <div className="address-info">
          <div className="icon d-flex align-items-end">
            <img src="images/icon/46.svg" alt="icon" />
          </div>
          <div className="title">Social Media</div>
          <p className="font-rubik">Find on social media</p>
          <ul className="d-flex justify-content-center">
            {socialContent.map((val, i) => (
              <li key={i}>
                <a href={val.link} target="_blank" rel="noreferrer">
                  <i className={`fa ${val.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* /.address-info  */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default ContactAddress;
