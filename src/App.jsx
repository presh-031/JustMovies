import { QueryClient, QueryClientProvider } from "react-query";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Rows from "./components/Rows";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App bg-black text-white max-w-full overflow-x-hidden">
        <Navbar />
        <Hero />
        <Rows />
      </div>
    </QueryClientProvider>
  );
}

export default App;
