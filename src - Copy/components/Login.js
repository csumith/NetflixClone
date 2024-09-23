import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { Validate } from "../utils/Validate";

const Login = () => {
  const [isSigInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  let toggleSignIn = () => {
    setisSignInForm(!isSigInForm);
  };

  let handleBtnClick = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    let message = Validate(email.current.value, password.current.value);
    console.log(message);
    seterrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="
          https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"
          alt="bg-img"
        />
      </div>
      <form className="bg-black p-8 w-3/12 my-36 mx-auto right-0 left-0 absolute text-white rounded-lg bg-opacity-80 ">
        <h1 className="font-bold text-3xl py-4">
          {isSigInForm ? "Sign-In" : "Sign-Up"}
        </h1>
        {!isSigInForm && (
          <input
            type="text"
            name="name"
            id=""
            placeholder="Enter Name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          name="name"
          id=""
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          name="password"
          ref={password}
          id=""
          placeholder="password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <p className="text-red-800 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-2 my-6 w-full bg-red-700 rounded-lg "
          onClick={handleBtnClick}
        >
          {isSigInForm ? "Sign-In" : "Sign-Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSigInForm
            ? " New to Netflix? SignUp Now"
            : "Already Register User SignIn Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
