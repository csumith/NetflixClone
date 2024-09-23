import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSujection = () => {
  const { movieNames, movieResults } = useSelector((store) => store?.gpt);

  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black opacity-90  text-white relative z-10  ">
      <div className="">
        {movieNames.map((movieNames, index) => (
          <MovieList title={movieNames} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSujection;
