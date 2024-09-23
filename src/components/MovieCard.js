import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path, movieCard }) => {
  if(!poster_path) return
  return (
    <div className="w-40 p-2">
      <img src={IMG_CDN_URL + poster_path} alt="movieCard" />
    </div>
  );
};

export default MovieCard;
