import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getMovieCast } from "../api/requests";

const MovieCast = ({ id }) => {
  const { isLoading, error, data } = useQuery("movie-cast", () => fetch(getMovieCast(id)).then((res) => res.json()));

  console.log(data);
  return (
    <>
      <p>Cast</p>
      <div>
        {/* slice cast list to a max? */}
        {data?.cast?.map((cast) => (
          <div>
            <p>{cast.original_name}</p>
            <img src={`https://image.tmdb.org/t/p/original${cast.profile_path}`} alt="" />
          </div>
        ))}
      </div>

      <p>Director</p>
      <div>
        {data?.crew
          ?.filter((crew) => crew.job === "Director")
          .map((director) => {
            return (
              <div>
                <p>{director.name || director.original_name || "Director"}</p>
                <img src={`https://image.tmdb.org/t/p/original${director.profile_path}`} alt="" />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MovieCast;
