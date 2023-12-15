import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <main className="page-not-found">
      <div className="page-not-found__title-container">
        <p className="page-not-found__code">404</p>
        <h3 className="page-not-found__title">Страница не найдена</h3>
      </div>
      <Link className="page-not-found__link" to="/">
        Назад
      </Link>
    </main>
  );
};

export default PageNotFound;
