import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'

const MoviesCardList = ({ movies, onDeleteMovie }) => {
  return (
    <section className='movies-card-list section'>
      <p className='movies-card-list__not-found'>Фильмы не найдены</p>
      <ul className='movies-card-list__list'>
        {movies.map((movie) => {
          return (<MoviesCard
            movie={movie}
            key={movie.movieId}
            onUnsaveMovie={onDeleteMovie}/>);
        })}
      </ul>
    </section>
  );
};

export default MoviesCardList;