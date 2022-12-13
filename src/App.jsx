import { QueryClient, QueryClientProvider } from "react-query";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App bg-black text-white max-w-full overflow-x-hidden">
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:id" element={<Movie />} />
          </Routes>
        </Router>
        {/* <Navbar /> */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
