import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMoviesVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("trailer", json?.results);
    let filterData = json?.results?.filter((video) => video.type === "Trailer");
    let trailer = filterData.length ? filterData[0] : json?.results[0];
    console.log("trailer=>", trailer);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMoviesVideo();
  }, []);
};

export default useMovieTrailer;
