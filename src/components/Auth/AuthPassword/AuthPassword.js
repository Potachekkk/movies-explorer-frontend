import React from 'react';
import AuthMain from '../AuthMain/AuthMain';

const AuthPassword = () => {
  return (
    <AuthMain
      labelText='Пароль'
      type='password'
      name='password'
      placeholder='Введите пароль'
      required
    />
  );
};

export default AuthPassword;