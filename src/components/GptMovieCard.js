import { Image_Url } from "../utils/constants";
import movieGenres from "../utils/movieGenres";

const GptMovieCard = ({ movie }) => {
  const { title, overview, poster_path, genre_ids, release_date } = movie;

  let description = overview.split(".").slice(0, 4).join(".")+".";

  return (
    <div className="
      w-full h-56 p-3 rounded-xl 
      bg-white/5 backdrop-blur-md 
      border border-white/10 
      shadow-lg shadow-black/40 
      hover:bg-white/10 hover:scale-[1.01] 
      hover:shadow-xl hover:shadow-black/50 
      transition-all duration-300 ease-out 
      flex gap-4 cursor-pointer
    ">
      {/* Poster */}
      <div className="w-36 h-full rounded-lg overflow-hidden shadow-md shadow-black/50">
        <img
          src={Image_Url + poster_path}
          alt={title + ' poster'}
          className="w-40 h-44"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between w-[70%] pr-3">
        
        <div>
          <h2 className="font-bold text-xl text-white leading-tight">
            {title}
            <span className="text-slate-400 font-medium ml-1">
              {" "}
              ({release_date.split("-")[0]})
            </span>
          </h2>

          <p className="text-sm text-slate-300 mt-1 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Genre Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {genre_ids?.map((id) => (
            <span
              key={id}
              className="
                text-xs px-2 py-1 
                rounded-full 
                bg-sky-600/30 text-sky-300 
                border border-sky-700/40 
                backdrop-blur-md 
                shadow-sm shadow-black/30
              "
            >
              {movieGenres[id]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GptMovieCard;
