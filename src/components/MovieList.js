import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(title);
  console.log("movieList=", movies?.results);

  return (
    <div className="">
      <h1 className="text-3xl py-3 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {movies?.map((movies) => (
            <MovieCard
              key={movies.id}
              poster_path={movies?.poster_path}
              MovieCard={"MoviesPoster"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
