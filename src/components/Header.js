import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LOGO, SupportedLanguage } from "../utils/constants";
import { addGptToggle } from "../utils/gptSlice";
import { addMultilanguage } from "../utils/changeLanguageSlice";
const Header = () => {
  const user = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt.gptToggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        // User is signed out
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);

  let handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleToogleSearch = () => {
    dispatch(addGptToggle());
  };

  const HandleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(addMultilanguage(e.target.value));
  };
  return (
    <div className="px-4 py-2 bg-gradient-to-b from-black absolute z-10 w-full ">
      <div className="flex justify-between py-2">
        <div>
          <img className="w-44" src={LOGO} alt="logo" />
        </div>

        {user && (
          <div className="flex py-4  rounded-xl px-4 h-22">
            <img
              className="w-28 p-2 opacity-70 animate-bounce rounded-full rotate-180  "
              src={user?.photoURL}
              alt=""
            />

            {showGpt && (
              <select
                className="bg-gray-700 p-2 h-12 text-xl font-bold text-slate-50 rounded-lg "
                onChange={HandleLanguageChange}
              >
                {SupportedLanguage.map((language) => (
                  <option key={language.identifire} value={language.identifire}>
                    {language.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="bg-purple-700 p-2 h-12  mx-2   text-xl font-bold text-slate-50 rounded-lg "
              onClick={handleToogleSearch}
            >
              {showGpt ? "HomePage" : "GPT-Search"}
            </button>

            <button
              className=" text-slate-50 text-xl font-bold px-2 mx-2   cursor-pointer bg-purple-700 rounded-lg p-2 h-12   drop-shadow-xl flex"
              onClick={handleSignOut}
            >
              SignOut
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
