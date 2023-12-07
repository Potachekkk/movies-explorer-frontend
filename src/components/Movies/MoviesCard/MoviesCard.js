import React from 'react';
import './MoviesCard.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import img from '../../../images/germany-film.svg'

const MoviesCard = ({title, duration, trailerLink}) => {
  const location = useLocation().pathname
  const [isSavedMovie, setSavedMovie] = useState(false)
  const saveButton = (
    `movies-card__save-button  ${isSavedMovie ? "movies-card__save-button_active": ""}`
  );

  function handleSaveClick() {
    setSavedMovie(!isSavedMovie);
}
  return (
    <li className='movies-card'>
      <div className='movies-card__img-container'>
        <div className='movies-card__button-container'>
          {location === '/movies' ? (
            <button type='button' className={saveButton} onClick={handleSaveClick}>Сохранить</button>
          ) : (
            <button type='button' className='movies-card__delete-button'></button>
          )}
        </div>
        <a 
          href={trailerLink}
          rel='noreferrer'
          target='_blank'
          className='movies-card__link'>
            <img className='movies-card__img' src={img} alt={title}/>
          </a>
        </div>
        <div className='movies-card__container'>
          <div className='movies-card__title-container'>
            <h3 className='movies-card__title'>{title}</h3>
            <p className='movies-card__duration movies-card__duration_type-box'>{duration}</p>
          </div>
        
        </div>
    </li>
  );
};

export default MoviesCard;