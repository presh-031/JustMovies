import { useQuery } from "react-query";
import MovieCast from "./MovieCast";
import MovieReviews from "./MovieReviews";
import SimilarMovies from "./SimilarMovies";

const MovieDetails = ({ movie }) => {
  return (
    <div>
      <div>
        <img
          className="mx-auto h-[35rem] w-[25rem] overflow-hidden rounded-xl "
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=""
        />
        <div className="mx-12">
          <h2 className="my-12 text-5xl font-semibold">
            {movie.title || movie.original_title || movie.original_name || "Title"} ({movie.release_date.slice(0, 4)})
          </h2>
          <p className="mb-12 text-4xl">
            {movie.vote_average.toFixed(1)} | {`${(movie.runtime / 60).toFixed(2)} Hrs ${movie.runtime % 60} Minutes`}
          </p>
          <p className="mb-12 text-2xl">
            {movie.spoken_languages?.map((language) => (
              // add keys
              <span>{language.english_name}</span>
            ))}
          </p>
          <div className="mb-12 flex flex-wrap gap-4">
            {movie.genres?.map((genre) => (
              <p key={genre.id} className=" rounded-lg bg-gray-500 px-4 py-2 text-2xl ">
                {genre.name}
              </p>
            ))}
          </div>
          <p className="mb-16 text-2xl leading-10">{movie.overview}</p>

          <MovieCast id={movie.id} />

          <SimilarMovies id={movie.id} />

          <MovieReviews id={movie.id} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
