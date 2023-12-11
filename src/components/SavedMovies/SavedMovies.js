import React, { useState, useEffect } from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { filterMovies, filterDuration } from "../../utils/MoviesFilter";

const SavedMovies = ({ savedMovies, onDeleteMovie }) => {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isCheckboxActive, setIsCheckboxActive] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function onSearchMovies(query) {
    setSearchQuery(query);
  }

  function handleShortMovies() {
    setIsCheckboxActive(!isCheckboxActive);
  }

  useEffect(() => {
    const moviesList = filterMovies(savedMovies, searchQuery);
    setFilteredMovies(
      isCheckboxActive ? filterDuration(moviesList) : moviesList,
    );
  }, [savedMovies, isCheckboxActive, searchQuery]);

  useEffect(() => {
    if (filteredMovies.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  return (
    <main className="saved-movies">
      <SearchForm onSearch={onSearchMovies} onFilter={handleShortMovies} />
      <MoviesCardList
        savedMovies={savedMovies}
        isNotFound={isNotFound}
        isSavedFilms={true}
        filteredMovies={filteredMovies}
        onDeleteMovie={onDeleteMovie}
      />
    </main>
  );
};

export default SavedMovies;
