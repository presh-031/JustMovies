import { useQuery } from "react-query";
import { getMovieCast } from "../api/requests";

const MovieCast = ({ id }) => {
  const { isLoading, error, data } = useQuery("movie-cast", () => fetch(getMovieCast(id)).then((res) => res.json()));
  console.log(data);
  return (
    <div>
      {/* slice cast list to a max? */}
      {data?.cast?.map((cast) => (
        <div>
          <p>{cast.original_name}</p>
          <img src="" alt="" />
        </div>
      ))}
    </div>
  );
};

export default MovieCast;
