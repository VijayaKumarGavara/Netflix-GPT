import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { useEffect } from "react";
import { addMovieTrailer } from "../utils/moviesSlice";

export default function useGetMovieTrailer(movieId){
    const dispatch=useDispatch();
  async function getMovieVideos() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_Options
    );
    const json = await response.json();

    const videos = json.results.filter((video) => video.type === "Trailer");
    const trailer = videos.length ? videos[0] : json.results[0];
    dispatch(addMovieTrailer(trailer));
  }
  useEffect(() => {
    getMovieVideos();
  }, []);
}