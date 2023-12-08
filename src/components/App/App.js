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
import api from '../../utils/MainApi';
import { CurrentUserContext } from '../context/CurrentUserContext';


const App = () => {
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({name: 'Vlad', email: 'potachekkk@yandex.ru'});
  const pathLocation = useLocation().pathname;
  const navigate = useNavigate();


  useEffect(() => {
    tokenCheck();
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

  function tokenCheck() {
    const currentToken = localStorage.getItem('token');
    if (currentToken) {
      api.checkToken(currentToken).then((res) => {
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

  function saveMovie(movieCard) {
    const currentToken = localStorage.getItem('token');
    api.saveMovie(movieCard, currentToken)
      .then((savedCard) => {
        setSavedMovies([savedCard, ...savedMovies]);
        console.log(`Карточка cохранена.`)
      })
      .catch((err) => {
        console.log(`Ошибка при сохранении карточки.`)
      });
  }

  const handleDeleteMovie = (movieId) => {
    api.deleteMovie(movieId)
      .then(() => {
        setSavedMovies(savedMovies.filter((movie) => {
          return movie._id !== movieId;
        }));
      })
      .catch((err) => {
        console.error(err);
      });
  };
  
  return (
    <LoggedInContext.Provider value={loggedIn}>
      <CurrentUserContext.Provider value={currentUser}>
      <div className='content'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={
          <Movies
            onSaveMovie={saveMovie}
            onDeleteMovie={handleDeleteMovie}
            savedMovies={savedMovies}
           />} />
          <Route path='/saved-movies' element={
          <SavedMovies
            savedMovies={savedMovies}
            onDeleteMovie={handleDeleteMovie}
          />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
      </CurrentUserContext.Provider>
    </LoggedInContext.Provider>
  );
};

export default App;
