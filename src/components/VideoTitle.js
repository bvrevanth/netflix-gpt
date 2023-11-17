import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="space-x-4">
        <button className="bg-white text-black px-8 py-3 text-base font-bold rounded-sm hover:bg-opacity-70 ">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white px-4 py-3 text-base font-normal bg-opacity-70 rounded-sm hover:bg-opacity-40 ">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
