import React from 'react';
import './MoviesCardList.css';
import { moviesList } from '../../../utils/MoviesList'
import MoviesCard from '../MoviesCard/MoviesCard'

const MoviesCardList = () => {
  return (
    <section className='movies-card-list section'>
      <p className='movies-card-list__not-found'>Фильмы не найдены</p>
      <ul className='movies-card-list__list'>
        {moviesList.map((movie, index) => {
          return (<MoviesCard key={index} {...movie}/>);
        })}
      </ul>
    </section>
  );
};

export default MoviesCardList;