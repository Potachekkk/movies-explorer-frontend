import React, { useState, useRef, useEffect} from 'react';
import './MoviesCardList.css';
// import { moviesList } from '../../../utils/MoviesList'
import MoviesCard from '../MoviesCard/MoviesCard'
import { SHOWN_MOVIES } from '../../../utils/constant';
import More from '../More/More';

const MoviesCardList = ({ foundMovies, savedMovies, onSaveButtonClick }) => {
  const [shownMovies, setShownMovies] = useState([]);
  const moviesCardListElement = useRef();

  const handleMoreButtonClick = () => {
    const numberOfColumns = window.getComputedStyle(moviesCardListElement.current).getPropertyValue('grid-template-columns').split(' ').length;
    const numberOfShownMovies = Math.ceil(shownMovies.length / numberOfColumns) * numberOfColumns;

    setShownMovies(foundMovies.slice(0, numberOfShownMovies + SHOWN_MOVIES[numberOfColumns].ADD));
  };

  useEffect(() => {
    if (foundMovies.length) {
      const numberOfColumns = window.getComputedStyle(moviesCardListElement.current).getPropertyValue('grid-template-columns').split(' ').length;

      setShownMovies(foundMovies.slice(0, SHOWN_MOVIES[numberOfColumns].INITIAL));
    }
  }, [foundMovies]);
  return (
    <>
    <section className='movies-card-list section'>
      <ul className='movies-card-list__list' ref={moviesCardListElement}>
        {shownMovies.map((movie) => {
          return (
          <MoviesCard 
            key={movie.movieId} 
            movie={movie} 
            savedMovies={savedMovies} 
            onSaveButtonClick={onSaveButtonClick} 
          />);
        })}
      </ul>
    </section>
    {shownMovies.length < foundMovies.length && (
      <More onMoreButtonClick={handleMoreButtonClick} />
    )}
    </>
  );
};

export default MoviesCardList;