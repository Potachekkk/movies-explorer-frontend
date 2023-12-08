import React from 'react';
import './MoviesCardList.css';
import MoviesCard from './../MoviesCard/MoviesCard'

const MoviesCardList = ({ movies, onDeleteMovie }) => {
  return (
    <section className='movies-card-list section'>
      <ul className='movies-card-list__list'>
        {movies.map((movie) => {
            return (<MoviesCard
              movie={movie}
              key={movie.movieId}
              onDeleteMovie={onDeleteMovie}
            />);
        })}
      </ul>
    </section>
  );
};

export default MoviesCardList;