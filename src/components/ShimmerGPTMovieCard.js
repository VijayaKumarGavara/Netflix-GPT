const ShimmerGPTMovieCard = () => {
  return (
    <div
      className="
        w-full h-56 p-3 rounded-xl 
        bg-white/5 backdrop-blur-md 
        border border-white/10 
        shadow-lg shadow-black/40 
        hover:bg-white/10 hover:scale-[1.01] 
        hover:shadow-xl hover:shadow-black/50 
        transition-all duration-300 ease-out 
        flex gap-4 cursor-pointer
      "
    >
      {/* Poster */}
      <div className="w-40 h-44 rounded-lg overflow-hidden shadow-md shadow-black/50 shimmer-bg" />

      {/* Content */}
      <div className="flex flex-col justify-between w-[70%] pr-3">
        <div>
          {/* Title */}
          <div className="h-6 w-3/12 rounded-md shimmer-bg" />

          {/* Overview - 3 lines */}
          <div className="h-4 w-10/12 mt-3 rounded-md shimmer-bg" />
          <div className="h-4 w-9/12 mt-2 rounded-md shimmer-bg" />
          <div className="h-4 w-8/12 mt-2 rounded-md shimmer-bg" />
        </div>

        {/* Genre tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="w-20 h-6 rounded-full shimmer-bg" />
          <span className="w-20 h-6 rounded-full shimmer-bg" />
          <span className="w-20 h-6 rounded-full shimmer-bg" />
        </div>
      </div>
    </div>
  );
};

export default ShimmerGPTMovieCard;
