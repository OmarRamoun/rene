import React from "react";

const FormFooterSignup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onClick={handleSubmit}>
      <input type="text" placeholder="Enter your email" />
      <button>Sign UP</button>
    </form>
  );
};

export default FormFooterSignup;
