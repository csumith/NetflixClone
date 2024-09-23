import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BGIMG } from "../utils/constants";
import GptMovieSujection from "./GptMovieSujection";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed">
        <img src={BGIMG} alt="bg-img" className="" />
      </div>
      <GptSearchBar />
      <GptMovieSujection />
    </div>
  );
};

export default GptSearch;
