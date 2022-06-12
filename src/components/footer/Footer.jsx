import React from 'react';
import FooterContent from "../footer/FooterContent";


const Footer = () => {

  return (
    <footer className="theme-footer-four">
      <div className="top-footer">
        <div className="container">
          <FooterContent />
        </div>
        {/* /.container */}
      </div>

      <div
        className="container">
        <div
          className="bottom-footer-content">
          <p>
            Copyright @{new Date().getFullYear()}{" "}
            <a
              href="https://omarramoun.com"
              target="_blank"
              rel="noreferrer"
            >
              Ramoun
            </a>{" "}
            inc.
          </p>
        </div>
        {/* /.bottom-footer */}
      </div>
    </footer>
  );
};

export default Footer;
