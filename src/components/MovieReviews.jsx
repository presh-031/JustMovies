import { useQuery } from "react-query";
import { getMovieReviews } from "../api/requests";
import Review from "./Review";

const MovieReviews = ({ id }) => {
  const { isLoading, error, data } = useQuery("movie-reviews", () =>
    fetch(getMovieReviews(id)).then((res) => res.json())
  );

  if (isLoading) return;
  if (error) return;
  console.log(data);
  return (
    <div>
      <p>MovieReviews</p>
      <>
        {data.results?.map((review) => (
          <Review review={review} />
        ))}
      </>
    </div>
  );
};

export default MovieReviews;
