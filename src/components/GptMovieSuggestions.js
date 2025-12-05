import GptMovieCard from './GptMovieCard'
import { useSelector } from 'react-redux'
import ShimmerGPTMovieCard from './ShimmerGPTMovieCard';

const GptMovieSuggestions = () => {
  const gptMovieResults=useSelector((store)=>store.gpt?.gptMovieResults);
  const nowPlaying=useSelector((store)=>store.movies?.nowPlayingMovies);
  const isLoading = useSelector((store) => store.gpt?.isLoading);
  
  return (
    <div className="
      h-auto bg-[rgb(20,20,20)] 
      w-7/12 mx-auto rounded-sm 
      overflow-y-scroll scrollbar-hide 
      px-4 py-6 shadow-[0_0_10px_rgba(0,0,0,0.5)] 
      flex flex-col items-center gap-y-4
    ">
      
      {/* 1️⃣ Loading state → Shimmer */}
      {isLoading && (
        <>
          <ShimmerGPTMovieCard />
          <ShimmerGPTMovieCard />
          <ShimmerGPTMovieCard />
        </>
      )}

      {/* 2️⃣ After search → Show GPT results */}
      {!isLoading && gptMovieResults && gptMovieResults.length > 0 && (
        gptMovieResults.map((movie) => (
          <GptMovieCard key={movie.id} movie={movie} />
        ))
      )}

      {/* 3️⃣ After search → No results */}
      {!isLoading && gptMovieResults && gptMovieResults.length === 0 && (
        <h2 className="text-gray-300 text-lg">No results found.</h2>
      )}

      {/* 4️⃣ Before any search → Show Now Playing */}
      {!gptMovieResults && !isLoading && nowPlaying && (
        nowPlaying.map((movie) => (
          <GptMovieCard key={movie.id} movie={movie} />
        ))
      )}
    </div>
  )
}

export default GptMovieSuggestions;