import { BG_IMG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchbar from "./GptSearchbar";

const GptSearch = () => {
  return (
    <div
      className="bg-cover bg-center w-full h-screen flex flex-col justify-center items-center gap-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.9)), url(${BG_IMG_URL})`,
      }}
    >  
      <GptSearchbar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
