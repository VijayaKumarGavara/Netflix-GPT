// import { useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
// import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

// const VideoBackground = ({ movieId }) => {
//   useGetMovieTrailer(movieId);

//   const trailer = useSelector((store) => store.movies?.movieTrailer);
//   const soundState = useSelector((store) => store.movies?.trailerVideoSound);

//   const iframeRef = useRef(null);

//   // Toggle mute using postMessage (super simple)
//   useEffect(() => {
//     if (!iframeRef.current) return;

//     // YouTube player command syntax
//     const command = soundState
//       ? { event: "command", func: "unMute" }
//       : { event: "command", func: "mute" };

//     iframeRef.current.contentWindow.postMessage(JSON.stringify(command), "*");
//   }, [soundState]);
//   useEffect(() => {
//     if (!iframeRef.current || !trailer?.key) return;

//     // force youtube to load the new video
//     const loadCommand = {
//       event: "command",
//       func: "loadVideoById",
//       args: [{ videoId: trailer.key }],
//     };

//     iframeRef.current.contentWindow.postMessage(
//       JSON.stringify(loadCommand),
//       "*"
//     );
//   }, [trailer?.key]);

//   return (
//     <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//       <iframe
//         key={trailer?.key}
//         ref={iframeRef}
//         className="absolute top-0 left-0 w-full h-full scale-[1.4] origin-center pointer-events-none"
//         src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&controls=0&loop=1&mute=1&enablejsapi=1&playlist=${trailer?.key}`}
//         title="bg-video"
//         allow="autoplay"
//       ></iframe>

//       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
//     </div>
//   );
// };

// export default VideoBackground;


import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useGetMovieTrailer(movieId);

  const trailer = useSelector((store) => store.movies?.movieTrailer);
  const soundState = useSelector((store) => store.movies?.trailerVideoSound);

  const iframeRef = useRef(null);

  // 🔥 When trailer changes → force load new video
  useEffect(() => {
    if (!iframeRef.current || !trailer?.key) return;

    const cmd = {
      event: "command",
      func: "loadVideoById",
      args: [{ videoId: trailer.key }]
    };

    iframeRef.current.contentWindow.postMessage(JSON.stringify(cmd), "*");
  }, [trailer?.key]);

  // 🔥 Toggle mute
  useEffect(() => {
    if (!iframeRef.current) return;

    const cmd = soundState
      ? { event: "command", func: "unMute" }
      : { event: "command", func: "mute" };

    iframeRef.current.contentWindow.postMessage(JSON.stringify(cmd), "*");
  }, [soundState]);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <iframe
        key={movieId}
        ref={iframeRef}
        className="absolute top-0 left-0 w-full h-full scale-[1.4] origin-center pointer-events-none"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&controls=0&loop=1&mute=1&enablejsapi=1&playlist=${trailer?.key}`}
        title="bg-video"
        allow="autoplay"
      ></iframe>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
    </div>
  );
};

export default VideoBackground;
