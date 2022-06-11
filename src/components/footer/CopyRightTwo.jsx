import React from "react";

const CopyRightTwo = () => {
  return (
    <div className="bottom-footer-content">
      <div className="d-flex align-items-center justify-content-center">
        <p>
          {" "}
          Copyright @{new Date().getFullYear()}{" "}
          <a
            href="https://themeforest.net/user/ib-themes/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            ib-themes
          </a>{" "}
          inc.
        </p>
      </div>
    </div>
    //   /.bottom-footer
  );
};

export default CopyRightTwo;
