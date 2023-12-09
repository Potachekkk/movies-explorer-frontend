// MainApi
const MAIN_BASE_URL = "https://api.vladiator.nomoredomainsmonster.ru";
const MOVIES_BASE_URL = "https://api.nomoreparties.co/beatfilm-movies"
const BASE_URL = "http://localhost:3000";
const CARDS_IMAGE_BASE_URL = "https://api.nomoreparties.co"

const headerPathNames = ['/', '/movies', '/saved-movies', '/profile'];
const footerPathNames = ['/', '/movies', '/saved-movies'];

const SHORT_MOVIES_DURATION = 40;
const MIN_BIG_SCREEN_SIZE = 1279;
const MAX_MEDIUM_SCREEN_SIZE = 1280;
const MIN_MEDIUM_SCREEN_SIZE = 767;
const MAX_SMALL_SCREEN_SIZE = 768;
const CARDS_QUANTITY_DECKTOP = 12;
const CARDS_QUANTITY_TABLET = 8;
const CARDS_QUANTITY_MOBILE = 5;
const CARDS_MORE_DECKTOP = 3;
const CARDS_MORE_MOBILE = 2;

const REQUEST_ERROR_TEXTS = {
    SIGNIN_INCORRECT_LOGIN_OR_PASSWORD: 'Вы ввели неправильный логин или пароль.',
    SIGNIN_TOKEN_NOT_TRANSFERED: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
    SIGNIN_INCORRECT_TOKEN: 'При авторизации произошла ошибка. Переданный токен некорректен.',
    SIGNIN_ERROR: 'При авторизации произошла ошибка.',
    USER_ALREADY_EXISTS: 'Пользователь с таким email уже существует.',
    SIGNUP_ERROR: 'При регистрации пользователя произошла ошибка.',
    PROFILE_UPDATE_ERROR: 'При обновлении профиля произошла ошибка.',
    INTERNAL_SERVER_ERROR: 'На сервере произошла ошибка.',
  };
const NOTHING_FOUND = "Ничего не найдено";
const KEY_WORD_ERROR = "Нужно ввести ключевое слово";
const MOVIES_SERVER_ERROR ="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";

export {
    REQUEST_ERROR_TEXTS,
    NOTHING_FOUND,
    KEY_WORD_ERROR,
    MOVIES_SERVER_ERROR,
    CARDS_QUANTITY_TABLET,
    CARDS_QUANTITY_MOBILE,
    CARDS_MORE_DECKTOP,
    CARDS_MORE_MOBILE,
    CARDS_QUANTITY_DECKTOP,
    MAX_SMALL_SCREEN_SIZE,
    MIN_MEDIUM_SCREEN_SIZE,
    MAX_MEDIUM_SCREEN_SIZE,
    MIN_BIG_SCREEN_SIZE,
    SHORT_MOVIES_DURATION,
    MOVIES_BASE_URL,
    MAIN_BASE_URL,
    BASE_URL,
    CARDS_IMAGE_BASE_URL,
    headerPathNames,
    footerPathNames
}