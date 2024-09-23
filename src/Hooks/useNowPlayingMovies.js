import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const nowplayingMovies = useSelector(
    (store) => store?.movies?.nowPlayingMovies
  );
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    let json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json));
  };

  useEffect(() => {
    if (!nowplayingMovies) {
      getNowPlayingMovies();
    }
  }, []);
};

export default useNowPlayingMovies;
