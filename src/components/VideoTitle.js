import React from "react";

const VideoTitle = ({ title, overview }) => {
  return <div className="absolute pt-52 px-12 z-20 text-white">
    <h1 className="font-bold text-5xl ">{title}</h1>
    <p className="w-1/3 py-6 text-lg">{overview}</p>
    <div>
        <button type="button" className="m-2 py-2 px-4 rounded-md bg-white hover:bg-slate-200 transform ease-in-out bg-opacity-80 text-black text-lg font-semibold">▶︎Play Now</button>
        <button type="button" className="m-2 py-2 px-4 rounded-md bg-gray-600 hover:bg-gray-700 bg-opacity-30 text-white text-lg font-semibold">ⓘ More Info</button>
    </div>
  </div>;
};

export default VideoTitle;
