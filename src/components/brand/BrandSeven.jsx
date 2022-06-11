import React from "react";

const brandContent = [
  { name: "fa-facebook", link: "https://www.facebook.com/" },
  { name: "fa-twitter", link: "https://twitter.com/home" },
  { name: "fa-linkedin", link: "https://www.linkedin.com/feed/" },
];

const BrandSeven = () => {
  return (
    <>
      {brandContent.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noopener noreferrer">
            <i className={`fa ${val.name}`} aria-hidden="true"></i>
          </a>
        </li>
      ))}
    </>
  );
};

export default BrandSeven;
