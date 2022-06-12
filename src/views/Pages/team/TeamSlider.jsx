import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TeamDetailsSlider() {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
  };

  const SliderContent = [
    {
      bigImage: "img_105",
      name: "Jannatul Ferdaus",
      designation: "Senior Product Designer",
      aboutDetails: `Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dole magna aliqua. Ut enim`,
      Experience: ` Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod
      tempor incididunt`,
      social: [
        {
          icon: "fa fa-facebook",
          link: "https://www.facebook.com/",
        },
        {
          icon: "fa fa-twitter",
          link: "https://twitter.com/",
        },
        {
          icon: "fa fa-dribbble",
          link: "https://dribbble.com/",
        },
        {
          icon: "fa fa-linkedin",
          link: "https://www.linkedin.com/",
        },
      ],
    },
    {
      bigImage: "img_104",
      name: "Erin Ferdosi",
      designation: "Software Engineer",
      aboutDetails: `Commonly used in the graphic, print & publishing industris for previewing visual mockups.`,
      Experience: `You will be creating the docs in this directory. The root directory may contain other files.`,
      social: [
        {
          icon: "fa fa-dribbble",
          link: "https://dribbble.com/",
        },
        {
          icon: "fa fa-linkedin",
          link: "https://www.linkedin.com/",
        },
      ],
    },
    {
      bigImage: "img_106",
      name: "Khairan Bashir",
      designation: "Front-end Engineer",
      aboutDetails: `You will be creating the docs in this directory. The root directory may contain other files.`,
      Experience: `Commonly used in the graphic, print & publishing industris for previewing visual mockups.`,
      social: [
        {
          icon: "fa fa-facebook",
          link: "https://www.facebook.com/",
        },
        {
          icon: "fa fa-twitter",
          link: "https://twitter.com/",
        },
      ],
    },
  ];

  return (
    <Slider {...settings}>
      {SliderContent.map((val, i) => (
        <div className="main-bg d-lg-flex align-items-center" key={i}>
          <div className="img-meta">
            <img
              src={`images/media/${val.bigImage}.png`}
              alt="team"
              className="w-100"
            />
          </div>
          {/* End img-meta */}

          <div className="text-wrapper">
            <div className="name font-gilroy-bold">{val.name}</div>
            <div className="position">{val.designation}</div>
            <h6 className="font-gilroy-bold">ABOUT ME</h6>
            <p className="pb-45">{val.aboutDetails}</p>
            <h6 className="font-gilroy-bold">Experties</h6>
            <p className="pb-45">{val.Experience}</p>
            <h6 className="font-gilroy-bold">FOLLOW & CONTACT</h6>
            <ul className="social-icon d-flex pt-15">
              {val.social.map((social, i) => (
                <li key={i}>
                  <a href={social.link} target="_blank" rel="noreferrer">
                    <i className={social.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* /.text-wrapper */}
        </div>
      ))}
    </Slider>
  );
}
