import React from 'react';
import './Movies.css';
import SearchForm from './SerchForm/SearchForm'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import More from './More/More'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Movies = () => {
  return (
    <main className='movies'>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <More />
      <Footer />
    </main>
  );
};

export default Movies;