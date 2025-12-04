import { API_Options } from "./constants";

export default async function searchMovie(movie) {
  const { title, year } = movie;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${title}&primary_release_year=${year}&page=1`,
      API_Options
    );
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
