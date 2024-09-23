import React from "react";
import { useSelector } from "react-redux";
import VideoBG from "./VideoBG";
import VideoTitile from "./VideoTitile";

const Main = () => {
  const movies = useSelector(
    (store) => store.movies?.nowPlayingMovies?.results
  );
  console.log(movies);
  if (!movies) return;
  const mainMovie = movies[0];
  console.log("mainMovies", mainMovie);
  const { original_title, overview,id } = mainMovie;
  return (
    <div>
      <VideoTitile title={original_title} overview={overview} />
      <VideoBG movieId={id} />
    </div>
  );
};

export default Main;
