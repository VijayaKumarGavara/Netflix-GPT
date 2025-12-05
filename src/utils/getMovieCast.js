import { API_Options } from "./constants";

export default async function getMovieCast(movieID) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/credits?language=en-US`,
      API_Options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
