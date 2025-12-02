import useNowplayingMovies from "../hooks.js/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowplayingMovies();
  return (
    <>
      <div className="relative top-0">
        <Header />
        <main className="">
          <MainContainer />
          <SecondaryContainer />
        </main>
      </div>
    </>
  );
};

export default Browse;
