import React, { useState } from "react";
import emailjs from "@emailjs/browser";


const errStyles = {
  color: "#fff",
  backgroundColor: "rgba(207, 42, 42, 0.7)",
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
  top: "125px",
  left: "0",
  right: "0",
  margin: "auto",
  zIndex: "1",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  border: "1px solid #cf2a2a",
};

const successStyles = {
  color: "#fff",
  backgroundColor: "rgba(42, 207, 111, 0.7)",
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
  top: "125px",
  left: "0",
  right: "0",
  margin: "auto",
  zIndex: "1",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  border: "1px solid #2acf40",
};

const FormEvent = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [resultMsg, setResultMsg] = useState("");
  const [err, setErr] = useState("");

  const sendEmail = (email) => {
    const templateParams = {
      'email': email,
    };
    emailjs.send(
      "service_9okjje6",
      "template_ew8dq0s",
      templateParams,
      "ZJl9MI8acOkyLLo-3"
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setResultMsg("Your request has been sent successfully!");
        setSuccess(true);
      }, function (error) {
        console.log('FAILED...', error);
        setResultMsg("");
        setSuccess(false);
      });
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
    setErr("");
    setSuccess(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

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
    return;
  };

  return (
    <form onSubmit={handleSubmit} className="position-relative">
      {!success && err && <div className="error" style={errStyles}>{err}</div>}
      {success && resultMsg && <div className="success" style={successStyles}>{resultMsg}</div>}
      <input
        value={email}
        onChange={handleEmail}
        type="text"
        placeholder="Email address"
      />
      <button type="submit">Start Trial</button>
    </form>
  );
};

export default FormEvent;
