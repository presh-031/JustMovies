import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Row = ({ title, fetchURL }) => {
  // Query database for specific row data
  // const { isLoading, error, data } = useQuery("rowMovies", () => fetch(fetchURL).then((res) => res.json()));

  const [data, setData] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch(fetchURL);
      const data = await res.json();

      setData(data);
    };
    getMovies();
  }, []);

  // Carousel settings
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2.5,
    swipeToSlide: true,
    // afterChange: function (index) {
    // console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
    // },
  };

  // Initialize navigate
  const navigate = useNavigate();

  console.log(title, fetchURL, data);
  return (
    <div className="mt-16">
      <h2 className="text-4xl font-semibold mb-4">{title}</h2>
      <Slider {...settings}>
        {data?.results?.map((movie) => {
          return (
            <div key={movie.id} className=" relative " onClick={() => navigate(`/movies/${movie.id}`)}>
              <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
              <div className="absolute w-full top-0 bg-black/80  backdrop-blur-md p-2 text-xl">
                {/* api often returns varying data depending on movie */}
                <p className="text-bold">{movie.title || movie.original_title || movie.original_name || "title"}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Row;
