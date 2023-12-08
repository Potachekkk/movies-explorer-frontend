import React, { useEffect, useState} from 'react';
import './SearchForm.css';
import { useLocation } from 'react-router-dom';
// import { KEY_WORD_ERROR } from '../../../utils/constant';

const SearchForm = ({ onSearch, onFilter, isCheckboxActive }) => {
  const currentLocation = useLocation().pathname;
    const [searchValue, setSearchValue] = useState("");
    const [isError, setIsError] = useState(false);

    // если мы на странице фильмов, получаем из хранилища поисковый запрос
    useEffect(() => {
        if (currentLocation === '/movies' && localStorage.getItem('movieSearch')) {
            setSearchValue(localStorage.getItem('movieSearch'));
        }
    }, [currentLocation]);


    function changeSearch(e) {
        setSearchValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (searchValue.trim().length === 0) {
            setIsError(true);
        } else {
            setIsError(false);
            onSearch(searchValue);
        }
    }
  return (
    <section className='search section'>

        <form name='search-form' onSubmit={handleSubmit} className='search__form' noValidate>
        <div className='search__container'>
          <input
            name='"search-input"'
            className={`search__input search__input-line ${isError ? 'search__input_incorrect' : ''}`}
            onChange={changeSearch}
            value={searchValue || ""}
            id="search-input"
            type="text"
            placeholder="Фильм"
            required
            minLength="1"
            maxLength="500"
          />
          <button type='submit' className='search__button' ></button>
          </div>
      <span className='search__input-error'>{isError}</span>
      <label className='search__box'>
        <input 
          type='checkbox' 
          name="filter-checkbox" 
          id='short-films' 
          checked={isCheckboxActive}
          onChange={changeSearch}
          className='search__checkbox'
          value="true"
          onFilter={onFilter}
        />
        <span className='search__checkbox-element'></span>
        <span className='search__checkbox-title'>Короткометражки</span>
      </label>
        </form>
      
      <div className='search__line'></div>
    </section>
  );
};

export default SearchForm;