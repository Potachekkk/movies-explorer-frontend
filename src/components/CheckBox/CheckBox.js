import React from "react"
import './CheckBox.css'

const CheckBox = ({ onFilter, isActive }) => {
    return (
        <label className='search__box'>
        <input 
          type='checkbox' 
          name="filter-checkbox" 
          id='short-films' 
          checked={isActive}
          onChange={onFilter}
          className='search__checkbox'
          value="true"
        />
        <span className='search__checkbox-element'></span>
        <span className='search__checkbox-title'>Короткометражки</span>
      </label>
    )
}

export default CheckBox;

