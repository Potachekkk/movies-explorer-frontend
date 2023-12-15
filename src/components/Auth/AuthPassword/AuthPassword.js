import React from "react";
import AuthMain from "../AuthMain/AuthMain";

const AuthPassword = ({ ...validationParams }) => {
  return (
    <AuthMain
      labelText="Пароль"
      type="password"
      name="password"
      placeholder="Введите пароль"
      required
      {...validationParams}
    />
  );
};

export default AuthPassword;
