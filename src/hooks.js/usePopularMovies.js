
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

export default function usePopularMovies() {
  const dispatch = useDispatch();
  async function getPopularMovies() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        API_Options
      );
      const json = await response.json();

      // console.log(json.results);

      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPopularMovies();
  }, []);
}
