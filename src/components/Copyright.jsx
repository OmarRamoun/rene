import React from "react";

const CopyRight = () => {
  return (
    <div className="bottom-footer-content">
      <div className="d-flex align-items-center justify-content-center">
        <p>
          {" "}
          Copyright @{new Date().getFullYear()}{" "}
          <a
            href="https://omarramoun.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            omarramoun
          </a>{" "}
          inc.
        </p>
      </div>
    </div>
  );
};

export default CopyRight;
