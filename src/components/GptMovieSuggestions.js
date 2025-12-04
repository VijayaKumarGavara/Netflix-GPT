import React from 'react'
import GptMovieCard from './GptMovieCard'
import { useSelector } from 'react-redux'

const GptMovieSuggestions = () => {
  const gptMovieResults=useSelector((store)=>store.gpt?.gptMovieResults);
  const nowPlaying=useSelector((store)=>store.movies?.nowPlayingMovies);

  const displayList=!gptMovieResults?nowPlaying:gptMovieResults;
  return (
    <div className='h-auto bg-[rgb(20,20,20)] w-7/12 mx-auto rounded-sm overflow-y-scroll scrollbar-hide px-4 py-6 shadow-[0_0_10px_rgba(0,0,0,0.5)] flex flex-col items-center gap-y-4'>
        {
          displayList.map((movie)=>{
            return <GptMovieCard key={movie?.id} movie={movie}/>
          })
        }
    </div>
  )
}

export default GptMovieSuggestions