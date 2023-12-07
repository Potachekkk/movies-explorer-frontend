import React from 'react';
import './MoviesCard.css';
import { useState } from 'react';
import { formatDuratonMovie } from '../../../utils/formatDurationMovie';

const MoviesCard = ({movie, onDeleteMovie}) => {

  const [isLoading, setIsLoading] = useState(false);
  
  async function handleCloseButtonClick() {
    setIsLoading(true);

    await onDeleteMovie(movie);

    setIsLoading(false);
  }

  return (
    <li className='movies-card'>
      <div className='movies-card__img-container'>
        <div className='movies-card__button-container'>
            <button type='button' className='movies-card__delete-button' onClick={handleCloseButtonClick} disabled={isLoading}>Сохранить</button>
        </div>
        <a 
          href={movie.trailerLink}
          rel='noreferrer'
          target='_blank'
          className='movies-card__link'>
            <img className='movies-card__img' src={movie.image} alt={movie.nameRu}/>
          </a>
        </div>
        <div className='movies-card__container'>
          <div className='movies-card__title-container'>
            <h3 className='movies-card__title'>{movie.nameRu}</h3>
            <p className='movies-card__duration movies-card__duration_type-box'>{formatDuratonMovie(movie.duration)}</p>
          </div>
        
        </div>
    </li>
  );
};

export default MoviesCard;