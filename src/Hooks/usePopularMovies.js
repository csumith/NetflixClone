import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const nowPopularMovies = useSelector(
    (store) => store?.movies?.nowPopularMovies
  );
  const dispatch = useDispatch();
  let getPopularMovies = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    let json = await data?.json();
    console.log(json);
    dispatch(addPopularMovies(json));
  };

  useEffect(() => {
    if (!nowPopularMovies) {
    }
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
