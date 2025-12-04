import { useSelector } from "react-redux";
import useNowplayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowplayingMovies();
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
  return (
    <>
      <div className="relative top-0">
        <Header />
        <main className="">
          {showGptSearch ? (
            <GptSearch />
          ) : (
            <>
              <MainContainer />
              <SecondaryContainer />
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default Browse;
