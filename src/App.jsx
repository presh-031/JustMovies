import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Rows from "./components/Rows";

function App() {
  return (
    <div className="App bg-black text-white max-w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Rows />
    </div>
  );
}

export default App;
