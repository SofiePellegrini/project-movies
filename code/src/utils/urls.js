export const API_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=a90dcccc9047bfdf345615e2c530184c&language=en-US&page=1';

export const API_DETAILS = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=a90dcccc9047bfdf345615e2c530184c&language=en-US`;
