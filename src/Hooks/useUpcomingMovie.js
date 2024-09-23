import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const nowUpComingMovies = useSelector(
    (store) => store?.movies?.nowUpComingMovies
  );
  const dispatch = useDispatch();
  let upComingMovies = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    let json = await data.json();
    dispatch(addUpComingMovies(json));
  };

  useEffect(() => {
    if (!nowUpComingMovies) {
      upComingMovies();
    }
  }, []);
};
export default useUpcomingMovies;
