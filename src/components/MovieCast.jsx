import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getMovieCast } from "../api/requests";

const MovieCast = ({ id }) => {
  const { isLoading, error, data } = useQuery("movie-cast", () => fetch(getMovieCast(id)).then((res) => res.json()));

  console.log(data);
  return (
    <>
      <p className="mb-8 text-5xl font-semibold">Cast</p>
      <div className="flex flex-wrap gap-4">
        {/* slice cast list to a max? */}
        {data?.cast?.map((cast) => (
          <div className="flex w-[9rem] flex-col items-center justify-between">
            <p className="text-center text-2xl">{cast.original_name}</p>
            <img
              className="h-[10rem] w-[9rem] object-contain"
              src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
              alt=""
            />
          </div>
        ))}
      </div>

      <p className="mb-8 mt-16 text-5xl font-semibold">Director</p>
      <div className="flex flex-wrap gap-4">
        {data?.crew
          ?.filter((crew) => crew.job === "Director")
          .map((director) => {
            return (
              <div className="flex w-[9rem] flex-col items-center justify-between">
                <p className="text-center text-2xl">{director.name || director.original_name || "Director"}</p>
                <img
                  className="h-[10rem] w-[9rem] object-contain"
                  src={`https://image.tmdb.org/t/p/original${director.profile_path}`}
                  alt=""
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MovieCast;
