import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Preloader from "../../Preloader/Preloader";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import NotFoundError from "../../NotFoundError/NotFoundError";
import {
  MIN_BIG_SCREEN_SIZE,
  MAX_MEDIUM_SCREEN_SIZE,
  MIN_MEDIUM_SCREEN_SIZE,
  MAX_SMALL_SCREEN_SIZE,
  CARDS_QUANTITY_DECKTOP,
  CARDS_QUANTITY_TABLET,
  CARDS_QUANTITY_MOBILE,
  CARDS_MORE_DECKTOP,
  CARDS_MORE_MOBILE,
  NOTHING_FOUND,
  MOVIES_SERVER_ERROR,
} from "../../../utils/constant";

const MoviesCardList = ({
  filteredMovies,
  savedMovies,
  onSaveMovie,
  onDeleteMovie,
  isSavedFilms,
  isRequestError,
  isNotFound,
  isLoading,
}) => {
  const currentLocation = useLocation().pathname;
  const [shownMoviesQuantity, setShownMoviesQuantity] = useState(0);

  function setShownQuantity() {
    const display = window.innerWidth;
    if (display > MIN_BIG_SCREEN_SIZE) {
      setShownMoviesQuantity(CARDS_QUANTITY_DECKTOP);
    } else if (
      display > MIN_MEDIUM_SCREEN_SIZE &&
      display < MAX_MEDIUM_SCREEN_SIZE
    ) {
      setShownMoviesQuantity(CARDS_QUANTITY_TABLET);
    } else if (display < MAX_SMALL_SCREEN_SIZE) {
      setShownMoviesQuantity(CARDS_QUANTITY_MOBILE);
    }
  }

  useEffect(() => {
    setShownQuantity();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", setShownQuantity);
    }, 500);
    return () => {
      window.removeEventListener("resize", setShownQuantity);
    };
  }, []);

  function loadMoreMovies() {
    const display = window.innerWidth;
    if (display > MIN_BIG_SCREEN_SIZE) {
      setShownMoviesQuantity(shownMoviesQuantity + CARDS_MORE_DECKTOP);
    } else if (
      display > MIN_MEDIUM_SCREEN_SIZE &&
      display < MAX_MEDIUM_SCREEN_SIZE
    ) {
      setShownMoviesQuantity(shownMoviesQuantity + CARDS_MORE_MOBILE);
    } else if (display < MAX_SMALL_SCREEN_SIZE) {
      setShownMoviesQuantity(shownMoviesQuantity + CARDS_MORE_MOBILE);
    }
  }

  function getSavedMovieCard(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  }
  return (
    <section className="movies-card-list section">
      {isLoading && <Preloader />}
      {!isLoading && !isRequestError && !isNotFound && (
        <>
          {currentLocation === "/saved-movies" ? (
            <>
              <ul className="movies-card-list__list">
                {filteredMovies.map((item) => {
                  return (
                    <MoviesCard
                      card={item}
                      key={isSavedFilms ? item._id : item.id}
                      savedCard={getSavedMovieCard(savedMovies, item)}
                      onSaveMovie={onSaveMovie}
                      onDeleteMovie={onDeleteMovie}
                      isSavedFilms={isSavedFilms}
                      savedMovies={savedMovies}
                    />
                  );
                })}
              </ul>
              <div className="movies-card__button-container"></div>
            </>
          ) : (
            <>
              <ul className="movies-card-list__list">
                {filteredMovies.slice(0, shownMoviesQuantity).map((item) => {
                  return (
                    <MoviesCard
                      card={item}
                      key={isSavedFilms ? item._id : item.id}
                      savedCard={getSavedMovieCard(savedMovies, item)}
                      onSaveMovie={onSaveMovie}
                      onDeleteMovie={onDeleteMovie}
                      isSavedFilms={isSavedFilms}
                      savedMovies={savedMovies}
                    />
                  );
                })}
              </ul>
              <section className="more section">
                {filteredMovies.length > shownMoviesQuantity ? (
                  <button
                    onClick={loadMoreMovies}
                    type="button"
                    className="more__button"
                  >
                    Ещё
                  </button>
                ) : (
                  ""
                )}
              </section>
            </>
          )}
        </>
      )}
      {isNotFound && !isLoading && <NotFoundError title={NOTHING_FOUND} />}
      {isRequestError && !isLoading && (
        <NotFoundError title={MOVIES_SERVER_ERROR} />
      )}
    </section>
  );
};
export default MoviesCardList;
