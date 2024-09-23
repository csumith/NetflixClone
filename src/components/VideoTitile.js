import React from "react";

const VideoTitile = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-36 px-12 absolute bg-gradient-to-r from-black text-white">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>

      <div className="">
        <button className="bg-white text-black p-2 px-12  text-xl rounded-lg hover:bg-opacity-80 ">
          ▶️Play
        </button>
        <button className="bg-gray-600 text-white p-2 px-12 mx-2  text-xl rounded-lg ">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitile;
