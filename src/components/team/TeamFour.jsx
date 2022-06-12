import React from "react";
import { Link } from "react-router-dom";

const TeamContent = [
  {
    designation: "Developer",
    name: "George Cortez",
    img: "img_29",
    animationDelay: "200",
  },
  {
    designation: "Co-Founder",
    name: "Juan Barber",
    img: "img_30",
    animationDelay: "250",
  },
  {
    designation: "Marc McCormick",
    name: "Marketing Crew ",
    img: "img_31",
    animationDelay: "300",
  },
  {
    designation: "Customer management",
    name: "Maud Ellis",
    img: "img_32",
    animationDelay: "50",
  },
  {
    designation: "Senior Designer",
    name: "Jhon Du",
    img: "img_33",
    animationDelay: "100",
  },
  {
    designation: "Co-Founder",
    name: "Juan Barber",
    img: "img_34",
    animationDelay: "150",
  },
];

const TeamFour = () => {
  return (
    <>
      {TeamContent.map((item, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={item.animationDelay}
          key={i}
        >
          <Link to="/team-details-v1" className="team-member">
            <img src={`images/media/${item.img}.png`} alt="team" />
            <div className="name">{item.name}</div>
            <div className="position">{item.designation}</div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TeamFour;
