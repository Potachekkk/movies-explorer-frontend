 import { MOVIES_BASE_URL } from "./constant";

const formatMovies = (movie) => {
  return {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: MOVIES_BASE_URL + movie.image.url,
    trailerLink: movie.trailerLink
      ? movie.trailerLink
      : MOVIES_BASE_URL + movie.image.url,
    thumbnail: MOVIES_BASE_URL + movie.image.formats.thumbnail.url,
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
  };
};

export default formatMovies;