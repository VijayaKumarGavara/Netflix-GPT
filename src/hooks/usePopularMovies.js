
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

export default function usePopularMovies() {
  const dispatch = useDispatch();
  const popularMovies=useSelector((store)=>store.movies?.popularMovies);
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
    !popularMovies && getPopularMovies();
  }, []);
}
