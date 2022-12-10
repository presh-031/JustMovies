import Hero from "../components/Hero";
import Rows from "../components/Rows";

const Home = () => {
  return (
    <div className=" bg-black text-white max-w-full overflow-x-hidden">
      <Hero />
      {/* <p>Holla</p> */}
      <Rows />
    </div>
  );
};

export default Home;
