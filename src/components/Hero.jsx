import { useEffect } from "react";
import { useQuery } from "react-query";
import API_REQUESTS from "../api/requests";

const Hero = () => {
  const { isLoading, error, data } = useQuery("popular-movies", () =>
    fetch(API_REQUESTS.Popular).then((res) => res.json())
  );

  useEffect(() => {
    const random = Math.floor(Math.random() * data?.results?.length);
    const randomMovie = data?.results[random];

    console.log("randomMovie", randomMovie);
  }, [data]);

  // console.log(data);
  // const random = Math.floor(Math.random() * data?.results?.length);
  // const randomMovie = data?.results[random];

  return (
    <div className="relative  h-screen">
      <div className="absolute h-full w-full bg-gradient-to-t from-black"></div>

      <div className="h-full">
        <img
          className="h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}`}
          alt=""
        />
        <div className="absolute top-44  left-8 text-white">
          <p className="mb-4 text-5xl font-semibold">{randomMovie?.title || randomMovie?.original_title || "Title"}</p>
          <div className="flex gap-4">
            <button className="rounded-sm bg-slate-300  py-4 px-8 text-2xl text-black hover:border-[1px] hover:border-white hover:bg-transparent hover:text-white hover:outline-none">
              Play
            </button>
            <button className="rounded-sm border-[1px] border-white py-4 px-8 text-2xl">Watch Later</button>
          </div>
          <p className="mt-12 mb-8 text-2xl text-gray-400">Released: 2022-08-05</p>
          <p className="text-2xl">{randomMovie?.overview} </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
