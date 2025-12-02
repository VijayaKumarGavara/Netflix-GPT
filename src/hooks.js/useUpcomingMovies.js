import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { addUpComingMovies } from "../utils/moviesSlice";

export default function useUpcomingMovies() {
  const dispatch = useDispatch();
  async function getUpcomingMovies() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        API_Options
      );
      const json = await response.json();

      // console.log(json);

      dispatch(addUpComingMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUpcomingMovies();
  }, []);
}
