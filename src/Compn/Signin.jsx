import React from "react";
import { useState } from "react";
import "../Style/si.css";
import {HashLink} from 'react-router-hash-link'
const Login = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleInput = (event) => {
    setHasValue(event.target.value !== "");
  };
  return (
    <div className="container " id="signin">
      <div className="heading">
        <h1>Signin to your PopX account</h1>
        <p className="lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      <form action="/account" method="submit">

      <div
        className={`custom-input ${isFocused ? "focus" : ""} ${
          hasValue ? "has-value" : ""
        }`}
      >
        <label className="input-label">Enter Address</label>
        <input
          type="text"
          required
          className="input-field"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onInput={handleInput}
        />
      </div>
      <div
        className={`custom-input ${isFocused ? "focus" : ""} ${
          hasValue ? "has-value" : ""
        }`}
      >
        <label className="input-label">Password</label>
        <input
          type="text"
          required
          className="input-field"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onInput={handleInput}
        />
      </div>
      <div>
        <button type="submit" className="button9">
        <HashLink to={"/account"}>Login</HashLink>
        </button>
      </div>
        </form>
    </div>
  );
};

export default Login;
