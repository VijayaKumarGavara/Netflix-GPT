import ai from "../utils/gemini";
import extractJson from "../utils/extractJSON";
import { addGptMovieResults } from "../utils/gptSlice";
import { useDispatch } from "react-redux";
import searchMovie from "../utils/searchMovies";

export default function useGetGptMovieResults() {
  const dispatch = useDispatch();

  // Return an async function your component can call
  const getResults = async (searchString) => {
    const gptQuery = `Act as a movie recommendation system.

The user query is: ${searchString}

Your task:
1. Recommend movies that match the meaning of the query.
2. ONLY return original titles that:
   - exist in TMDB,
   - have at least 1 exact-match result using
     https://api.themoviedb.org/3/search/movie?query={TITLE}
   - are uniquely identifiable.
3. Return ONLY raw JSON (no markdown, no code blocks).

Example:
[
  { "title": "RRR", "year": 2022, "language": "te" },
  { "title": "Gundamma Katha", "year": 1962, "language": "te" }
]`;

    try {
      const gptResponse = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: gptQuery,
      });

      const parsed = extractJson(gptResponse.text);
      console.log("GPT JSON:", parsed);

      if (!parsed || parsed.length === 0) return;

      // 2️⃣ FETCH TMDB MATCH FOR EACH MOVIE — IN PARALLEL
      const tmdbResults = await Promise.all(
        parsed.map(async (movie) => {
          const res = await searchMovie(movie);
          if (res?.total_results > 0) {
            return res.results[0]; // FIRST best match
          }
          return null;
        })
      );

      // 3️⃣ FILTER OUT null results
      const finalResults = tmdbResults.filter((m) => m !== null);

      console.log("Final usable movies:", finalResults);

      // 4️⃣ STORE INTO REDUX
      dispatch(addGptMovieResults(finalResults));
    } catch (error) {
      console.log(error);
    }
  };

  return getResults; // THE HOOK RETURNS THIS
}
