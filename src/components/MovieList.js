import MovieCard from "./MovieCard";
export default function MovieList({ title, movies }) {

  return (
    <div className="flex flex-col">
      <h1 className="font-semibold text-lg my-2 px-12 text-white">{title}</h1>
      <div className="flex gap-4 w-full overflow-x-scroll scrollbar-hide  px-12">
        {
            movies?.map((movie)=>{
                return <MovieCard key={movie.id} poster_path={movie?.poster_path} name={movie?.title}/>
            })
        }
      </div>
      
    </div>
  );
}
