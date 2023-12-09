import React from 'react';
import './MoviesCard.css';
import { CARDS_IMAGE_BASE_URL } from '../../../utils/constant';

const MoviesCard = ({ card, savedCard, onSaveMovie, onDeleteMovie, isSavedFilms, savedMovies }) => {
  const cardSaveButtonClassName = (
    `movies-card__save-button ${savedCard ? "movies-card__save-button_active" : ""}`
);

// меняем отображение карточки на странице фильмов
function handleCardClick() {
    if (savedCard) {
        onDeleteMovie(savedMovies.filter((movie) => movie.movieId === card.id)[0]);
    } else {
        onSaveMovie(card);
    }
}

// удаляем карточку на странице сохраненных фильмов
function handleCardDelete() {
    onDeleteMovie(card);
}

//конвертируем длительность фильма
function convertDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
}

  return (
    <li className='movies-card'>
      <article className="movies-card__main" id={card._id}>
        <div className='movies-card__img-container'>
          <div className='movies-card__button-container'>
          {isSavedFilms ? (
            <button
              type='button' 
              className='movies-card__delete-button'
              onClick={handleCardDelete}>
            </button>
          ) : (
            <button
              onClick={handleCardClick}
              type='button' 
              className={cardSaveButtonClassName}>Сохранить
            </button>
          )}
          </div>
          <a 
            href={card.trailerLink}
            rel='noreferrer'
            target='_blank'
            className='movies-card__link'>
              <img className='movies-card__img' src={isSavedFilms ? card.image : `${CARDS_IMAGE_BASE_URL}/${card.image.url}`} alt={card.nameRU}/>
            </a>
          </div>
          <div className='movies-card__container' >
            <div className='movies-card__title-container'>
              <h3 className='movies-card__title'>{card.nameRU}</h3>
              <p className='movies-card__duration movies-card__duration_type-box'>{convertDuration(card.duration)}</p>
            </div>
          </div>
        </article>
    </li>
  );
};

export default MoviesCard;