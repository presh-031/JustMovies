export const API_KEY = "07b05651d442420d47455773a0c1dad3";

export const backdrop_URL = "https://image.tmdb.org/t/p/original";
export const backdrop_URL_Small = "https://image.tmdb.org/t/p/w500";

const API_REQUESTS = {
  Popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  TopUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  TopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  Trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  SciFi: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
  War: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  Crime: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`,
  Animation: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
  Horror: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  Comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  Adventure: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12`,
  Drama: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`,
};

export const getMovieDetails = (movie_id) => {
  return `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
};

export default API_REQUESTS;
