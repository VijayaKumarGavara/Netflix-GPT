import { Image_Url } from "../utils/constants";
export default function MovieCard({ name, poster_path }) {
  return (
    <div className="w-32 h-44 shrink-0 ">
      <img className="w-40 h-44 rounded-sm hover:scale-105 transition duration-200" src={`${Image_Url}${poster_path}`} alt={name + " Poster"} />
    </div>
  );
}
