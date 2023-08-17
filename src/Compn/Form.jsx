import React from "react";
import "../Style/Form.css";
const Form = () => {
  return (
    <div className="form" id="/">
      <h1 className="heading">Welcome to PopX</h1>
      <p className="lorem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <form action="/create">
      <button className="button2">
        Create Account
      </button>
      </form>
      <form action="/signin">
      <button className="button1">
        Already Registered? Login
      </button>
      </form>
    </div>
  );
};

export default Form;
