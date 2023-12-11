import React from "react";
import AuthMain from "../AuthMain/AuthMain";

const AuthName = ({ ...validationParams }) => {
  return (
    <AuthMain
      labelText="Имя"
      type="text"
      name="name"
      placeholder="Введите имя"
      minLength="2"
      maxLength="30"
      pattern="[A-Za-zА-Яа-яЁё\s-]+"
      required
      {...validationParams}
    />
  );
};

export default AuthName;
