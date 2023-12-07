import React, { useEffect, useState} from 'react';
import './SearchForm.css';
import useForm from '../../../utils/useForm';

const SearchForm = ({ 
  onSubmit,
  onCheckboxChange,
  isLoading,
  defaultSearchText,
  defaultAreShortMoviesSelected,
}) => {
  const defaultValues = {
    searchText: defaultSearchText,
    areShortMoviesSelected: defaultAreShortMoviesSelected,
  };

  const [errorText, setErrorText] = useState('');
  
  const [values, errors, isValid, handleChange] = useForm(defaultValues, !!defaultSearchText);
  
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!isValid) {
      setErrorText('Нужно ввести ключевое слово');
      return;
    }

    onSubmit(values);
  }

  useEffect(() => {
    if (values.areShortMoviesSelected !== defaultAreShortMoviesSelected) {
      onCheckboxChange(values.areShortMoviesSelected);
    }
  }, [values.areShortMoviesSelected, onCheckboxChange, defaultAreShortMoviesSelected]);

  useEffect(() => {
    if (isValid) {
      setErrorText('');
    }
  }, [isValid]);
  return (
    <section className='search section'>

        <form name='search-form' onSubmit={handleSubmit} className='search__form' noValidate>
        <div className='search__container'>
          <input
            name='searchText'
            className={`search__input search__input-line ${errorText ? 'search__input_incorrect' : ''}`}
            value={values.searchText}
            onChange={handleChange}
            disabled={isLoading}
            type='text' 
            placeholder='Фильм' 
            required 
          />
          <button type='submit' className={`search__button ${isLoading ? '' : 'link' }`} disabled={isLoading}></button>
          </div>
      <span className='search__input-error'>{errorText}</span>
      <label className='search__box'>
        <input 
          type='checkbox' 
          name='areShortMoviesSelected' 
          id='short-films' 
          checked={values.areShortMoviesSelected}
          onChange={handleChange}
          disabled={isLoading}
          className='search__checkbox' 
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