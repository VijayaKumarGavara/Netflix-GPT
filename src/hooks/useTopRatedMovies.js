import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

export default function useTopRatedMovies() {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  async function getTopRatedgMovies() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated",
        API_Options
      );
      const json = await response.json();

      // console.log(json);

      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    !topRatedMovies && getTopRatedgMovies();
  }, []);
}
