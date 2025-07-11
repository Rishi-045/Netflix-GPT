import { useSelector } from "react-redux";
import useMovieTrailer from "./hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const movieKey = useSelector((store) => store.movies?.movieTrailer?.key);

  return (
    <div className="w-full h-auto absolute overflow-hidden">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${movieKey}?&autoplay=1&mute=1&controls=0&rel=0&showinfo=0&loop=1&playlist=${movieKey}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
