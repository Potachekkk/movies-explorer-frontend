import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className='search section'>
      <div className='search__container'>
        <form name='search-form' className='search__form'>
          <input className='search__input search__input-line' type='text' placeholder='Фильм' required />
          <button type='submit' className='search__button'></button>
        </form>
      </div>
      <label className='search__box'>
        <input type='checkbox' name='short-film' id='short-film' value='short-film' className='search__checkbox' />
        <span className='search__checkbox-element'></span>
        <span className='search__checkbox-title'>Короткометражки</span>
      </label>
      <div className='search__line'></div>
    </section>
  );
};

export default SearchForm;