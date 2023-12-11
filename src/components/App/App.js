import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { LoggedInContext } from "../context/LoggedInContext";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import * as api from "../../utils/MainApi";
import { CurrentUserContext } from "../context/CurrentUserContext";
import MoviesPage from "../MoviesPage/MoviesPage";
import SavedMoviesPage from "../SavedMoviesPage/SavedMoviesPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Logged from "../Logged/Logged";
import { REQUEST_TEXTS } from "../../utils/constant";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import SuccessIcon from "../../images/success_icon.svg";
import FailIcon from "../../images/fail_icon.svg";

const App = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [infoTitle, setInfoTitle] = useState("Успешно!");
  const [savedMovies, setSavedMovies] = useState([]);
  const [editSubmitTitle, setEditSubmitTitle] = useState("Сохранить");
  const [infoImg, setInfoImg] = useState(SuccessIcon);

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    const currentToken = localStorage.getItem("token");
    if (loggedIn && currentToken) {
      Promise.all([
        api.getUserInfo(currentToken),
        api.getSavedMovies(currentToken),
      ])
        .then(([resUser, resSavedMovies]) => {
          setCurrentUser(resUser);
          setSavedMovies(resSavedMovies.reverse());
        })
        .catch(() => {
          console.log(`Ошибка при загрузке данных пользователя и карточек.`);
        });
    }
  }, [loggedIn]);

  function handleRegistration({ name, email, password }) {
    setIsLoading(true);
    api
      .register(name, email, password)
      .then((res) => {
        if (res) {
          setInfoImg(SuccessIcon);
          setInfoTitle(REQUEST_TEXTS.REG_SUCCESS_MESSAGE);
          handleLogin({ email, password });
        }
      })
      .catch(() => {
        setInfoTitle(REQUEST_TEXTS.REG_UNSUCCESS_MESSAGE);
        setInfoImg(FailIcon);
      })
      .finally(() => {
        setIsInfoPopupOpen(true);
        setIsLoading(false);
      });
  }

  function handleLogin({ email, password }) {
    setIsLoading(true);
    api
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setLoggedIn(true);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        handleUnauthorized(err);
        setInfoTitle(REQUEST_TEXTS.LOGIN_UNSUCCESS_MESSAGE);
        setInfoImg(FailIcon);
        setIsInfoPopupOpen(true);
        navigate("/signin", { replace: true });
        console.log(`Ошибка при входе в систему`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUnauthorized(err) {
    if (err === "Ошибка: 401") {
      handleLogout();
    }
  }
  function checkToken() {
    const currentToken = localStorage.getItem("token");
    if (currentToken) {
      api
        .getContent(currentToken)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate("/movies");
          }
        })
        .catch(() => {
          console.log(`Ошибка при проверке токена`);
        });
    }
  }

  function handleUpdateUser(userData) {
    const currentToken = localStorage.getItem("token");
    setIsLoading(true);
    setEditSubmitTitle("Сохраняем...");
    const name = userData.name;
    const email = userData.email;
    api
      .editUserInfo(name, email, currentToken)
      .then((res) => {
        setCurrentUser(res);
        setInfoTitle(REQUEST_TEXTS.USER_INFO_SUCCESS_MESSAGE);
        setInfoImg(SuccessIcon);
      })
      .catch((err) => {
        handleUnauthorized(err);
        setInfoTitle(REQUEST_TEXTS.USER_INFO_UNSUCCESS_MESSAGE);
        setInfoImg(FailIcon);
        console.log(`Ошибка при обновлении данных.`);
      })
      .finally(() => {
        setIsLoading(false);
        setIsInfoPopupOpen(true);
        setEditSubmitTitle("Сохранить");
      });
  }

  function saveMovie(movieCard) {
    const currentToken = localStorage.getItem("token");
    api
      .saveMoviesCard(movieCard, currentToken)
      .then((savedCard) => {
        setSavedMovies([savedCard, ...savedMovies]);

        console.log(`Карточка cохранена.`);
      })
      .catch((err) => {
        console.log(`Ошибка при сохранении карточки.`);
      });
  }

  function deleteMovie(movieCard) {
    const currentToken = localStorage.getItem("token");
    api
      .deleteMoviesCard(movieCard._id, currentToken)
      .then(() => {
        setSavedMovies((state) => state.filter((card) => card !== movieCard));

        console.log(`Карточка удалена.`);
      })
      .catch((err) => {
        console.log(`Ошибка при удалении карточки.`);
      });
  }

  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem("movies");
    localStorage.removeItem("movieSearch");
    localStorage.removeItem("shortMovies");
    localStorage.removeItem("allMovies");
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  }

  function closeAllPopups() {
    setIsInfoPopupOpen(false);
  }

  function handleEscClose(e) {
    if (e.key === "Escape") {
      closeAllPopups();
    }
  }

  function handleOverlay(e) {
    if (!e.target.closest(".popup-container")) {
      closeAllPopups();
    }
  }

  return (
    <LoggedInContext.Provider value={loggedIn}>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute>
                  <Movies
                    element={MoviesPage}
                    savedMovies={savedMovies}
                    onSaveMovie={saveMovie}
                    onDeleteMovie={deleteMovie}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute>
                  <SavedMovies
                    element={SavedMoviesPage}
                    savedMovies={savedMovies}
                    onDeleteMovie={deleteMovie}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile
                    logOut={handleLogout}
                    onUpdate={handleUpdateUser}
                    editSubmitTitle={editSubmitTitle}
                    isLoading={isLoading}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <Logged
                  element={Register}
                  loggedIn={loggedIn}
                  onRegister={handleRegistration}
                />
              }
            />
            <Route
              path="/signin"
              element={<Logged element={Login} onLogin={handleLogin} />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
          <InfoTooltip
            isOpen={isInfoPopupOpen}
            onClose={closeAllPopups}
            infoTitle={infoTitle}
            infoImg={infoImg}
            onEscClick={handleEscClose}
            onOverlayClick={handleOverlay}
          />
        </div>
      </CurrentUserContext.Provider>
    </LoggedInContext.Provider>
  );
};

export default App;
