import { useQuery } from "react-query";
import API_REQUESTS from "../api/requests";

import Slider from "react-slick";

const Hero = () => {
  const { isLoading, error, data } = useQuery("popular-movies", () =>
    fetch(API_REQUESTS.Popular).then((res) => res.json())
  );
  console.log(data);

  // settings to configure slider
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: true,
  };

  return (
    <div className="h-screen  relative">
      <Slider {...settings}>
        {data?.results?.map((popularMovie) => {
          return (
            <>
              <img
                className="h-full object-cover w-full"
                src="https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
                alt=""
              />
              <div className="text-white absolute  top-44 left-8">
                <p className="font-semibold text-5xl mb-4">Warriors of Future</p>
                <div className="flex gap-4">
                  <button className="py-4 px-8  text-2xl rounded-sm hover:border-[1px] hover:bg-transparent hover:border-white hover:outline-none hover:text-white text-black bg-slate-300">
                    Play
                  </button>
                  <button className="py-4 px-8 border-[1px] rounded-sm border-white text-2xl">Watch Later</button>
                </div>
                <p className="mt-12 mb-8 text-2xl text-gray-400">Released: 2022-08-05</p>
                <p className="text-2xl">
                  When a meteor carrying a destructive plant strikes the world, a suicide squad is given hours to save
                  their post-apocalyptic city from total collapse.
                </p>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default Hero;
