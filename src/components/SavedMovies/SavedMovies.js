import React from 'react';
import './SavedMovies.css';
import SearchForm from '../Movies/SerchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const SavedMovies = () => {
  return (
    <main className='saved-movies'>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </main>
  );
};

export default SavedMovies;