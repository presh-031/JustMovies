import { useQuery } from "react-query";

import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Row = ({ title, fetchURL }) => {
  // Query database for specific row data
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then((res) => res.json())
  );

  // Carousel settings
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2.5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
    },
  };
  return (
    <div className="mt-8">
      <h2 className="text-4xl font-semibold mb-4">{title}</h2>
      <Slider {...settings}>
        <div className=" relative ">
          <img src="https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg" alt="" />
          <div className="absolute w-full top-0 bg-black/80  backdrop-blur-md p-2 text-xl">
            <p className="text-bold">Emancipation</p>
          </div>
        </div>
        <div className=" relative ">
          <img src="https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg" alt="" />
          <div className="absolute w-full top-0 bg-black/80  backdrop-blur-md p-2 text-xl">
            <p className="text-bold">Emancipation</p>
          </div>
        </div>
        <div className=" relative ">
          <img src="https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg" alt="" />
          <div className="absolute w-full top-0 bg-black/80  backdrop-blur-md p-2 text-xl">
            <p className="text-bold">Emancipation</p>
          </div>
        </div>
        <div className=" relative ">
          <img src="https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg" alt="" />
          <div className="absolute w-full top-0 bg-black/80  backdrop-blur-md p-2 text-xl">
            <p className="text-bold">Emancipation</p>
          </div>
        </div>
        <div className=" relative ">
          <img src="https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg" alt="" />
          <div className="absolute w-full top-0 bg-black/80  backdrop-blur-md p-2 text-xl">
            <p className="text-bold">Emancipation</p>
          </div>
        </div>
        <div className=" relative ">
          <img src="https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg" alt="" />
          <div className="absolute w-full top-0 bg-black/80  backdrop-blur-md p-2 text-xl">
            <p className="text-bold">Emancipation</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Row;
