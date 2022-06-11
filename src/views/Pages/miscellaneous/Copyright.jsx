import React from 'react';

const Copyright = () => {
  return (
    <p className="text-center font-rubik copyright-text">
      Copyright @{new Date().getFullYear()}{" "}
      <a
        href="https://omarramoun.com"
        target="_blank"
        title="myFrame"
        rel="noreferrer"
      >
        Ramoun
      </a>{" "}
      inc.
    </p>
  );
};

export default Copyright;
