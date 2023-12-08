import React from 'react';
import Movies from "../Movies/Movies";

const MoviesPage = ({ savedMovies, onSaveMovie, onDeleteMovie, searchQuery, filteredMovies, isCheckboxActive, onSearch, onFilter, isShortsActive }) => {
    return (
    <>
      <Movies
        savedMovies={savedMovies}
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
        searchQuery={searchQuery}
        filteredMovies={filteredMovies}
        isCheckboxActive={isCheckboxActive}
        onSearch={onSearch}
        onFilter={onFilter}
        isShortsActive={isShortsActive}
      />
    </>
    )
  };
  
  export default MoviesPage;