import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import usePopularMovies from "../hooks.js/usePopularMovies";
import useTopRatedMovies from "../hooks.js/useTopRatedMovies";
import useUpcomingMovies from "../hooks.js/useUpcomingMovies";
const SecondaryContainer = () => {
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
  const movies = useSelector((store) => store.movies);
  const {nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies}=movies;
  return (
    <div className="bg-black">
      <div className="-mt-32 relative z-20">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Top Rated"} movies={topRatedMovies} />
        <MovieList title={"Upcmoing "} movies={upcomingMovies} />
      </div>
      
    </div>
  );
};

export default SecondaryContainer;
