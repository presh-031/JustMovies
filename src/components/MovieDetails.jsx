import { useQuery } from "react-query";
import MovieCast from "./MovieCast";
import MovieReviews from "./MovieReviews";
import SimilarMovies from "./SimilarMovies";

const MovieDetails = ({ movie }) => {
  return (
    <div>
      <div>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
        <div>
          <h2>
            {movie.title || movie.original_title || movie.original_name || "Title"} ({movie.release_date.slice(0, 4)})
          </h2>
          <p>
            {movie.vote_average} | {`${movie.runtime / 60} Hrs ${movie.runtime % 60} Minutes`}
          </p>
          <p>
            {movie.spoken_languages?.map((language) => (
              // add keys
              <span>{language.english_name}</span>
            ))}
          </p>
          <div>
            {movie.genres?.map((genre) => (
              <div key={genre.id}>
                <p>{genre.name}</p>
              </div>
            ))}
          </div>
          <p>{movie.overview}</p>

          <h3>Cast</h3>
          <MovieCast id={movie.id} />
          <SimilarMovies id={movie.id} />
          <MovieReviews id={movie.id} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
