import React from 'react';
import './AuthMain.css';

const AuthMain = ({
  labelText,
  ...inputAttributes
}) => {
  return (
    <label className='auth__main-container'>
      <span className='auth__main-label'>{labelText}</span>
      <input className='auth__main' {...inputAttributes} />
      <span className='auth__main-error auth__main-error_active'>Ошибка</span>
    </label>
  );
};

export default AuthMain;