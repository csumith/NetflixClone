import React from "react";
import openai from "../utils/openai";
import { lang } from "../utils/MultiLanguage";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";
const GptSearchBar = () => {
  const dispatch = useDispatch()
  const gptVal = useRef();
  const languageSelect = useSelector(
    (store) => store.multilanguage.selectedlango
  );
  console.log("languageSelect", languageSelect);

  //Search movie inside tmdb api
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handlegpt = () => {
    console.log(gptVal.current.value);
    //Make and api call to gpt api

    //"Avengers: Endgame, Joker, Parasite, The Irishman, Knives Out"
    async function main() {
      const gptQuery =
        "Act as movie Recommendation system and Suggest some movies for the query" +
        gptVal.current.value +
        "only give me names of 5 movies ,comma Seperated like the example given ahead .Example Result:Gadar,sholay,Don,Golmaal,Koi Mil gaya";
      const gptResult = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");
      console.log("gptMovies=>", gptMovies);
      // after using split(',') = ["Avengers Endgame", "Joker, Parasite", "The Irishman", "Knives Out"]
      // Now for each movie i am searching inside tmdb api
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      //[Promise,Promise,Promise,Promise,Promise]
      const tmdbresult = await Promise.all(promiseArray);
      console.log("tmdbResult=", tmdbresult);
      dispatch(addGptMovies({ movieNames:gptMovies,movieResults:tmdbresult}))
    }

    main();
  };
  return (
    <div className="pt-[17%] flex justify-center ">
      <form
        className=" bg-black opacity-90 w-1/2 grid grid-cols-12  rounded-lg relative z-10 border border-white "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={gptVal}
          type="text"
          className="p-3 m-2 col-span-9  rounded-lg bg-black opacity-50 text-white border border-white"
          placeholder={lang[languageSelect]?.gptSearchPlaceholder}
        />
        <button
          className="  bg-red-700 col-span-3 m-3 text-xl font-bold rounded-lg text-slate-50 border border-white"
          onClick={handlegpt}
        >
          {lang[languageSelect]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
