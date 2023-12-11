import React from "react";
import SavedMovies from "../SavedMovies/SavedMovies";

const SavedMoviesPage = ({ savedMovies, onDeleteMovie }) => {
  return (
    <>
      <SavedMovies savedMovies={savedMovies} onDeleteMovie={onDeleteMovie} />
    </>
  );
};

export default SavedMoviesPage;
