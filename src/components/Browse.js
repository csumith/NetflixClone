import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Main from "./Main";
import Secondary from "./Secondary";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopMovie from "../Hooks/useTopMovie";
import useUpcomingMovies from "../Hooks/useUpcomingMovie";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const GptView = useSelector((store) => store?.gpt.gptToggle);
  console.log("gpttoggleValue=", GptView);
  useNowPlayingMovies();
  usePopularMovies();
  useTopMovie();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {GptView ? (
        <GptSearch />
      ) : (
        <>
          <Main />
          <Secondary />
        </>
      )}
    </div>
  );
};

export default Browse;
