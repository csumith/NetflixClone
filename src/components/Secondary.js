import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const Secondary = () => {
  const movies = useSelector((store) => store.movies);
  console.log("moviesSecondary", movies);
  return (
    movies?.nowPlayingMovies && movies?.nowUpComingMovies && movies?.nowPopularMovies &&  (
      <div className="bg-black">
        <div className="-mt-52 relative z-10   pl-12 ">
          <MovieList title={""} movies={movies?.nowPlayingMovies?.results} />
          <MovieList
            title={"Trending Movies"}
            movies={movies?.nowPopularMovies?.results}
          />
          <MovieList
            title={"Top Movies"}
            movies={movies?.nowPopularTopMovies?.results}
          />
          <MovieList
            title={"UpComing Movies"}
            movies={movies?.nowUpComingMovies?.results}
          />
          <MovieList
            title={"Popular Movies"}
            movies={movies?.nowPopularTopMovies?.results}
          />
          <MovieList
            title={"Action Movies"}
            movies={movies?.nowPopularMovies?.results}
          />
          <MovieList
            title={"Commedy Movies"}
            movies={movies?.nowPlayingMovies?.results}
          />
          <MovieList
            title={"UpComing Movies"}
            movies={movies?.nowUpComingMovies?.results}
          />
          <MovieList
            title={"Popular Movies"}
            movies={movies?.nowPopularTopMovies?.results}
          />
          <MovieList
            title={"Action Movies"}
            movies={movies?.nowPopularMovies?.results}
          />
          <MovieList
            title={"Commedy Movies"}
            movies={movies?.nowPlayingMovies?.results}
          />
        </div>
      </div>
    )
  );
};

export default Secondary;
