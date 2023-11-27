import React from 'react';
import AuthMain from '../AuthMain/AuthMain';

const AuthName = () => {
  return (
    <AuthMain
      labelText='Имя'
      type='text'
      name='name'
      placeholder='Введите имя'
      minLength='2'
      maxLength='30'
      required
    />
  );
};

export default AuthName;