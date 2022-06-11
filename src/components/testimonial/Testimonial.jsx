import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    margin: 30,
  };

  const TestimonilContent = [
    {
      desc: `Having a home-based business is a wonderful asset to your life. The problem is how to manage your projects without wasting the time learning how to use a new project managment software. I know you have looked answers everywhere. But It's easy just "Rene"`,
      reviewerName: "Rebica Lu",
      designation: "UI Designer",
    },
    {
      desc: `It’s a great exprience to work with Rene. They ’re very humble and expert in project management systems. I'm very happy to have their software as part of my day to day work.`,
      reviewerName: "Rashed Hasan",
      designation: "Front-end Developer",
    },
    {
      desc: `I am used to working with complex project management softwares (those that you need time to learn and understand). But Rene is different. From the first glance I understand the UI with no need to learn anything.`,
      reviewerName: "Julian Camus",
      designation: "DevOps Engineer",
    },
    {
      desc: `The first time I've checked "Rene" website, I had a couple of questions. So, I contacted their support team and BAM!. In no time I was in a face to face zoom meeting with an awesome support guy before even buying the software`,
      reviewerName: "Rachel Clothier",
      designation: "ML/DL Engineer",
    },
  ];

  return (
    <Slider {...settings}>
      {TestimonilContent.map((val, i) => (
        <div
          className="item"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <p>{val.desc}</p>
          <h6 className="name">{val.reviewerName}</h6>
          <span className="desig">{val.designation}</span>
        </div>
      ))}
    </Slider>
  );
}
