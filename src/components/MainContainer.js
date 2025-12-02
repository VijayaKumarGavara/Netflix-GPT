import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { title, overview, id } = mainMovie;
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent z-10"></div>
      <VideoBackground movieId={id} />
      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default MainContainer;
