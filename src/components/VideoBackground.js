import { useSelector } from "react-redux";
import useGetMovieTrailer from "../hooks.js/useGetMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useGetMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies?.movieTrailer);
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <iframe
        // className="w-full h-full object-cover"
        className="absolute top-0 left-0 w-full h-full scale-[1.4] origin-center"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
    </div>
    
  );
};

export default VideoBackground;
