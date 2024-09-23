import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopMovies } from "../utils/movieSlice";

const useTopMovie = () => {
  const nowPopularTopMovies = useSelector(
    (store) => store?.movies?.nowPopularTopMovies
  );

  const dispatch = useDispatch();
  let getTopMovies = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    let json = await data?.json();
    console.log(json);
    dispatch(addTopMovies(json));
  };

  useEffect(() => {
    if (!nowPopularTopMovies) {
      getTopMovies();
    }
  }, []);
};
export default useTopMovie;
