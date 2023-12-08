// MainApi
const MAIN_BASE_URL = "https://api.vladiator.nomoredomainsmonster.ru";

const headerPathNames = ['/', '/movies', '/saved-movies', '/profile'];
const footerPathNames = ['/', '/movies', '/saved-movies'];

// MoviesApi
const MOVIES_BASE_URL = "https://api.nomoreparties.co";

const SHOWN_MOVIES = {
    1: {
      INITIAL: 5,
      ADD: 2,
    },
    2: {
      INITIAL: 8,
      ADD: 2,
    },
    3: {
      INITIAL: 12,
      ADD: 3,
    }
  };

export {
    MAIN_BASE_URL,
    MOVIES_BASE_URL,
    SHOWN_MOVIES,
    headerPathNames,
    footerPathNames
}