import React, { useEffect, useContext, useState } from "react";
import "./Profile.css";
import { CurrentUserContext } from "../context/CurrentUserContext";
import useForm from "../FormValidator/FormValidator";
import { USER_NAME_REGEX } from "../../utils/constant";

const Profile = ({ logOut, onUpdate, editSubmitTitle, isLoading }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const currentUser = useContext(CurrentUserContext);
  const { enteredValues, errors, handleChange, isFormValid, resetForm } =
    useForm();
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [isEqualValues, setEqualValues] = useState(true);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();

    let newUserName = "";
    let newUserEmail = "";

    enteredValues.name
      ? (newUserName = enteredValues.name)
      : (newUserName = currentUser.name);
    enteredValues.email
      ? (newUserEmail = enteredValues.email)
      : (newUserEmail = currentUser.email);

    if (!isEqualValues) {
      onUpdate({
        name: newUserName,
        email: newUserEmail,
      });
      resetForm();
    }

    setIsDisabled(true);
  }

  useEffect(() => {
    let name = true;
    let email = true;
    if (enteredValues.name) {
      name = enteredValues.name === currentUser.name;
    }
    if (enteredValues.email) {
      email = enteredValues.email === currentUser.email;
    }
    setEqualValues(name && email);
  }, [enteredValues.name, enteredValues.email]);

  useEffect(() => {
    if (!isLoading) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser, isLoading]);

  useEffect(() => {
    if (enteredValues.name) {
      setName(enteredValues.name);
    }
    if (enteredValues.email) {
      setEmail(enteredValues.email);
    }
  }, [enteredValues.name, enteredValues.email]);

  const profileLabelClassName = `profile__input-label ${
    isDisabled ? "profile__input-label_disabled" : ""
  }`;

  const profileSubmitButtonClassName = `profile__button profile__save-button ${
    isDisabled ? "profile__save-button_disabled" : ""
  } ${
    !isFormValid || isLoading || isEqualValues
      ? "profile__save-button_inactive"
      : ""
  }`;

  const profileLogOutButtonClassName = `profile__button profile__sign-out-button ${
    !isDisabled ? "profile__sign-out-button_disabled" : ""
  }`;

  function handleEditButtonClick() {
    enteredValues.name = currentUser.name;
    enteredValues.email = currentUser.email;
    setIsDisabled(!isDisabled);
  }

  return (
    <main className="profile section">
      <div className="profile__container">
        <div className="profile__column">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <form
            name="profile"
            className="profile__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <label className="profile__input-container">
              <span className={profileLabelClassName} htmlFor="name">
                Имя
              </span>
              <input
                className={`profile__input ${
                  isDisabled || isLoading ? "profile__input_disabled" : ""
                } ${errors.name ? "profile__input_type_error" : ""}`}
                onChange={handleChange}
                pattern={USER_NAME_REGEX}
                required
                id="name"
                name="name"
                type="text"
                placeholder="Имя"
                value={enteredValues.name || ''}
                minLength="2"
                maxLength="30"
              />
              <span
                id="name-error"
                className={`profile__input-error ${
                  errors.name ? "profile__input-error_active" : ""
                }`}
              >
                {errors.name}
              </span>
            </label>
            <label className="profile__input-container">
              <span className={profileLabelClassName} htmlFor="email">
                E-mail
              </span>
              <input
                className={`profile__input profile__input_type_email ${
                  isDisabled || isLoading ? "profile__input_disabled" : ""
                } ${errors.email ? "profile__input_type_error" : ""}`}
                onChange={handleChange}
                pattern="^\S+@\S+\.\S+$"
                required
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
                value={enteredValues.email || ''}
                minLength="2"
                maxLength="30"
              />
              <span
                id="email-error"
                className={`profile__input-error ${
                  errors.email ? "profile__input-error_active" : ""
                }`}
              >
                {errors.email}
              </span>
            </label>
            <button
              className={profileSubmitButtonClassName}
              type="submit"
              disabled={
                !isFormValid || isLoading || isEqualValues ? true : false
              }
            >
              {editSubmitTitle}
            </button>
          </form>
        </div>

        <div className="profile__footer">
          <button
            className="profile__button profile__edit-button"
            type="button"
            onClick={handleEditButtonClick}
          >
            {isDisabled ? "Редактировать" : "Отменить"}
          </button>
          <button
            onClick={logOut}
            className={profileLogOutButtonClassName}
            type="button"
            aria-label="Кнопка выхода из аккаунта"
          >
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </main>
  );
};

export default Profile;
