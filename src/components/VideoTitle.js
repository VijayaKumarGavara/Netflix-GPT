import { toggleTrailerVideoSound } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
const VideoTitle = ({ title, overview }) => {
  const dispatch = useDispatch();
  function handleSoundButton() {
    dispatch(toggleTrailerVideoSound());
  }
  const soundState = useSelector((store) => store.movies?.trailerVideoSound);
  return (
    <div className="absolute pt-44 px-12 z-20 text-white">
      <h1 className="font-bold text-5xl ">{title}</h1>
      <p className="w-1/3 py-6 text-base">{overview}</p>
      <div>
        <button
          type="button"
          className="m-2 py-2 px-4 rounded-md bg-white hover:bg-slate-200 transform ease-in-out bg-opacity-80 text-black text-lg font-semibold"
        >
          ▶︎Play Now
        </button>
        <button
          type="button"
          className="m-2 py-2 px-4 rounded-md bg-gray-600 hover:bg-gray-700 bg-opacity-30 text-white text-lg font-semibold"
        >
          ⓘ More Info
        </button>
        <button
          type="button"
          className="m-2 py-2 px-4 rounded-md bg-transparent hover:bg-gray-600 hover:opacity-50 transform ease-in-out bg-opacity-80 text-black text-lg font-semibold"
          onClick={handleSoundButton}
        >
          {soundState ? "🔇" : "🔊"}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
