import React from "react";
import { useState } from "react";
import "../Style/create.css";
import { HashLink } from "react-router-hash-link";
const Create = () => {
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
    <div className="container" id="create">
      <div className="heading">
        <h1>Create your PopX account</h1>
      </div>
      <form action="/account" method="submit">
      <div
        className={`custom-input ${isFocused ? "focus" : ""} ${
          hasValue ? "has-value" : ""
        }`}
      >
        <label className="input-label">
          Full Name<span>*</span>
        </label>
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
        <label className="input-label">
          Phone number<span>*</span>
        </label>
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
        <label className="input-label">
          Email Address<span>*</span>
        </label>
        <input
          type="email"
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
        <label className="input-label">
          Password<span>*</span>
        </label>
        <input
          type="password"
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
        <label className="input-label">
          Conpany Name<span>*</span>
        </label>
        <input
          type="text"
          required
          className="input-field"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onInput={handleInput}
        />
      </div>
      <div className="radio">
        <p>
          Are you an Agency?<span>*</span>
        </p>
        <input type="radio" name="radio" />
        <label className="yes" for="html">
          Yes
        </label>
        <input className="no" type="radio" name="radio" />
        <label for="html">No</label>
      </div>

      <button className="button1">
        <HashLink to={"/account"}>Create Account</HashLink>
      </button>
        </form>
    </div>
  );
};

export default Create;
