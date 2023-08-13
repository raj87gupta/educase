import { HashLink } from "react-router-hash-link";
import React from "react";
import "../Style/Form.css";
const Form = () => {
  return (
    <div className="form" id="/">
      <h1 className="heading">Welcome to PopX</h1>
      <p className="lorem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <button className="button2">
        <HashLink to={"/create"}>Create Account</HashLink>
      </button>
      <button className="button1">
        <HashLink to={"/signin"}>Already Registered? Login</HashLink>
      </button>
    </div>
  );
};

export default Form;
