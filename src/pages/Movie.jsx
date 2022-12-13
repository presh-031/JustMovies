import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api/requests";
import MovieDetails from "../components/MovieDetails";
import Reviews from "../components/Reviews";
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
        <img src={data ? `https://image.tmdb.org/t/p/original${data.backdrop_path}` : ""} alt="" />
      </div>

      <MovieDetails data={data} />
      <SimilarMovies data={data} />
      <Reviews data={data} />
    </div>
  );
};

export default Movie;
