import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api/requests";
import MovieDetails from "../components/MovieDetails";
import Reviews from "../components/MovieReviews";
import SimilarMovies from "../components/SimilarMovies";

const Movie = () => {
  let params = useParams();

  const { isLoading, error, data } = useQuery("movie-details", () =>
    fetch(getMovieDetails(params.id)).then((res) => res.json())
  );
  console.log(data);
  if (isLoading) {
    return;
  }

  if (error) {
    return;
  }
  return (
    <div>
      <div>
        <img
          className="h-screen object-cover "
          src={data ? `https://image.tmdb.org/t/p/original${data.backdrop_path}` : ""}
          alt=""
        />
      </div>

      <MovieDetails movie={data} />
    </div>
  );
};

export default Movie;
