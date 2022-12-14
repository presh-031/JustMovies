import { getSimilarMovies } from "../api/requests";
import Row from "./Row";

const SimilarMovies = ({ id }) => {
  return (
    <div>
      <Row title="Similar Movies" fetchURL={getSimilarMovies(id)} />
    </div>
  );
};

export default SimilarMovies;
