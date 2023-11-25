import React from 'react';
import './MoviesCard.css';
import img from '../../../images/germany-film.svg'

const MoviesCard = ({title, duration}) => {
  return (
    <li className='movies-card'>
      <div className='movies-card__img-container'>
        <div className='movies-card__button-container'>
            <button type='button' className='movies-card__save-button movies-card__save-button_type-box'>Сохранить</button>
        </div>
        <a 
          href='/movies'
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