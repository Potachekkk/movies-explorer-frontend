import React, { useContext, useState } from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import { LoggedInContext } from "../context/LoggedInContext";

const Navigation = () => {
  const loggedIn = useContext(LoggedInContext);
  const location = useLocation();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const pathname = location.pathname;

  const handleBurgerButtonClick = () => {
    setIsBurgerMenuOpen(true);
  };

  const handleCloseButtonClick = () => {
    setIsBurgerMenuOpen(false);
  };

  return (
    <nav className="nav">
      {loggedIn ? (
        <>
          {" "}
          <button
            type="button"
            onClick={handleBurgerButtonClick}
            className="nav__burger-button-link"
          />
          <div
            className={`nav__container ${
              isBurgerMenuOpen ? "nav__container_opened" : ""
            }`}
          >
            {" "}
            <div className="nav__links">
              <button
                type="button"
                onClick={handleCloseButtonClick}
                className="nav__close-button-link"
              />
              <ul className="nav__list">
                <li className="nav__item nav__item-link nav__item-link_type_burger">
                  <Link
                    to="/"
                    className={`nav__link ${
                      pathname === "/" ? "nav__link_active" : ""
                    }`}
                  >
                    Главная
                  </Link>
                </li>
                <li className="nav__item nav__item_active nav__item-link">
                  <Link
                    to="/movies"
                    className={`nav__link ${
                      pathname === "/movies" ? "nav__link_active" : ""
                    }`}
                  >
                    Фильмы
                  </Link>
                </li>
                <li className="nav__item nav__item-link">
                  <Link
                    to="/saved-movies"
                    className={`nav__link ${
                      pathname === "/saved-movies" ? "nav__link_active" : ""
                    }`}
                  >
                    Сохранённые фильмы
                  </Link>
                </li>
              </ul>
              <div className="nav__item">
                <Link to="/profile" className="nav__acc">
                  <p
                    className={`nav__acc-text ${
                      pathname === "/profile" ? "nav__acc-text_active" : ""
                    }`}
                  >
                    Аккаунт
                  </p>
                </Link>
              </div>
            </div>{" "}
          </div>
        </>
      ) : (
        <ul className="nav__unauth-list">
          <li className="nav__unauth-item">
            <Link
              className="nav__unauth-link nav__unauth-link_type_signup"
              to="/signup"
            >
              Регистрация
            </Link>
          </li>
          <li className="nav__unauth-item">
            <Link
              className="nav__unauth-link nav__unauth-link_type_signin"
              to="/signin"
            >
              Войти
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
