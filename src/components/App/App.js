import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { LoggedInContext} from '../context/LoggedInContext';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import * as api from '../../utils/MainApi';
import { CurrentUserContext } from '../context/CurrentUserContext';
import MoviesPage from '../MoviesPage/MoviesPage';
import SavedMoviesPage from '../SavedMoviesPage/SavedMoviesPage';
import Logged from '../Logged/Logged';


const App = () => {
  // хуки навигации
  const pathLocation = useLocation().pathname;
  const navigate = useNavigate();
  // состояние авторизации пользователя
  const [loggedIn, setLoggedIn] = useState(false);
  // состояние загрузки во время сабмита форм
  const [isLoading, setIsLoading] = useState(false);
  // текущий пользователь
  const [currentUser, setCurrentUser] = useState({});
  // состояние отображения попапа
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  // текст и картинка для отображения в инфо-попапе
  const [infoTitle, setInfoTitle] = useState("Успешно!");
  // const [infoImg, setInfoImg] = useState(SuccessImgSrc);
  // карточки сохраненных фильмов
  const [savedMovies, setSavedMovies] = useState([]);
  // текст на сабмит-кнопке в профиле пользователя
  const [editSubmitTitle, setEditSubmitTitle] = useState("Сохранить");

  // проверка токена каждый раз, когда пользователь открывает страницу
  useEffect(() => {
    checkToken();
  }, []);

  // загрузка сохраненных карточек и профиля пользователя
  useEffect(() => {
    const currentToken = localStorage.getItem('token');
    if (loggedIn && currentToken) {
      Promise.all([api.getUserInfo(currentToken), api.getSavedMovies(currentToken)])
        .then(([resUser, resSavedMovies]) => {
          setCurrentUser(resUser);
          setSavedMovies(resSavedMovies.reverse());
        })
        .catch(() => {
          console.log(`Ошибка при загрузке данных пользователя и карточек.`);
        });
    }
  }, [loggedIn]);

  function checkToken() {
    const currentToken = localStorage.getItem('token');
    if (currentToken) {
      api.getContent(currentToken).then((res) => {
        if (res) {
          setLoggedIn(true);
          navigate(pathLocation);
        }
      })
        .catch(() => {
          console.log(`Ошибка при проверке токена`);
        });
    }
  }

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    checkToken();
  };

  function saveMovie(movieCard) {
    const currentToken = localStorage.getItem('token');
    api.saveMoviesCard(movieCard, currentToken)
      .then((savedCard) => {
        setSavedMovies([savedCard, ...savedMovies]);

        console.log(`Карточка cохранена.`)
      })
      .catch((err) => {

        console.log(`Ошибка при сохранении карточки.`)

      });
  }

  // удаление фильма из избранного
  function deleteMovie(movieCard) {
    const currentToken = localStorage.getItem('token');
    api.deleteMoviesCard(movieCard._id, currentToken)
      .then(() => {
        setSavedMovies((state) => state.filter((card) => card !== movieCard));

        console.log(`Карточка удалена.`)
      })
      .catch((err) => {

        console.log(`Ошибка при удалении карточки.`)

        setIsInfoPopupOpen(true);
      });
  }


  
  return (
    <LoggedInContext.Provider value={loggedIn}>
      <CurrentUserContext.Provider value={currentUser}>
      <div className='content'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={
          <Movies
            element={MoviesPage}
            loggedIn={loggedIn}
            savedMovies={savedMovies}
            onSaveMovie={saveMovie}
            onDeleteMovie={deleteMovie}
           />} />
          <Route path='/saved-movies' element={
          <SavedMovies
            element={SavedMoviesPage}
            loggedIn={loggedIn}
            savedMovies={savedMovies}
            onDeleteMovie={deleteMovie}
          />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<Logged
            element={Register}
            onLogin={handleLogin}
            />} />
          <Route path='/signin' element={<Logged
            element={Login}
            onLogin={handleLogin}
            />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
      </CurrentUserContext.Provider>
    </LoggedInContext.Provider>
  );
};

export default App;
