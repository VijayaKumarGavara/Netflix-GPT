import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { addNowPlayingMovies, addSelectedMovieTrailer } from "../utils/moviesSlice";

export default function useNowplayingMovies() {
  const dispatch = useDispatch();
  async function getNowPlayingMovies() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_Options
      );
      const json = await response.json();

    //   console.log(json);

      dispatch(addNowPlayingMovies(json.results));
      dispatch(addSelectedMovieTrailer(json.results[0]));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}
