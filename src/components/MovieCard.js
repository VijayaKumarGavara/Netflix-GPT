import { useDispatch } from "react-redux";
import { Image_Url } from "../utils/constants";
import { addSelectedMovieTrailer } from "../utils/moviesSlice";
export default function MovieCard({movie}) {
  const dispatch=useDispatch();
  const {name, poster_path}=movie;
  function handleClick(){
    dispatch(addSelectedMovieTrailer(movie));
  }
  return (
    <div className="w-32 h-44 shrink-0 cursor-pointer" onClick={handleClick}>
      <img className="w-40 h-44 rounded-sm hover:scale-105 transition duration-200" src={`${Image_Url}${poster_path}`} alt={name + " Poster"} />
    </div>
  );
}
