import { send } from "process";
import React, { useState } from "react";


const errStyles = {
  color: "#fff",
  backgroundColor: "#cf2a2a",
  padding: "10px",
  borderRadius: "5px",
  fontSize: "14px",
  marginBottom: "10px",
  textAlign: "center",
  width: "100%",
  display: "block",
  textTransform: "uppercase",
  fontWeight: "bold",
  letterSpacing: "1px",
  fontFamily: "Rubik, sans-serif",
  position: "absolute",
  top: "115px",
  left: "0",
  right: "0",
  margin: "auto",
  zIndex: "1",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  border: "1px solid #cf2a2a",
};

const FormEvent = () => {

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState("");

  const sendEmail = (email) => {
    // implement formspree.io
    console.log("email:", email);
    // send(email);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("clikced");

    const emailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

    if (!email) {
      setErr("Email is required");
      setSuccess(false);
      return;
    }

    if (!emailRegex.test(email)) {
      setErr("Invalid email");
      setSuccess(false);
      return;
    }

    sendEmail(email);
    setErr("");
    setEmail("");
    setSuccess(true);
    return;
  };
  return (
    <form onSubmit={handleSubmit} className="position-relative">
      {!success && err && <div className="error" style={errStyles}>{err}</div>}
      <input type="text" placeholder="Email address" />
      <button type="submit">Start Trial</button>
    </form>
  );
};

export default FormEvent;
