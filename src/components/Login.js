import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";

import { Validate } from "../utils/Validate";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { BGIMG, USER_AVTAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [isSigInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(true);
  const name = useRef(null);
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
    if (!message) {
      //authenticate with firebase email or user
      if (!isSigInForm) {
        //sign up logic

        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);

            updateProfile(auth.currentUser, {
              displayName: name.current.value,
              photoURL: USER_AVTAR,
            })
              .then(() => {
                // Profile updated!
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                // An error occurred
                seterrorMessage(error.message);
              });

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMessage(errorMessage + "-" + errorCode);

            // ..
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMessage(errorMessage + "-" + errorCode);
          });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BGIMG} alt="bg-img" />
      </div>
      <form className="bg-black p-8 w-3/12 my-36 mx-auto right-0 left-0 absolute text-white rounded-lg bg-opacity-80 ">
        <h1 className="font-bold text-3xl py-4">
          {isSigInForm ? "Sign-In" : "Sign-Up"}
        </h1>
        {!isSigInForm && (
          <input
            ref={name}
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
