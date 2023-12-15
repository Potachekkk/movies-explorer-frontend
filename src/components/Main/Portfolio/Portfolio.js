import React from "react";
import "./Portfolio.css";
import portfolioArrow from "../../../images/portfolio_arrow.png";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            rel="noreferrer"
            target="_blank"
            className="portfolio__link"
            href="https://github.com/Potachekkk/how-to-learn"
          >
            <p className="portfolio__info">Статичный сайт</p>
            <img
              className="portfolio__arrow"
              src={portfolioArrow}
              alt="Стрелка"
            />
          </a>
        </li>
        <li className="portfolio__item">
          <a
            rel="noreferrer"
            target="_blank"
            className="portfolio__link"
            href="https://github.com/Potachekkk/russian-travel"
          >
            <p className="portfolio__info">Адаптивный сайт</p>
            <img
              className="portfolio__arrow"
              src={portfolioArrow}
              alt="Стрелка"
            />
          </a>
        </li>
        <li className="portfolio__item">
          <a
            rel="noreferrer"
            target="_blank"
            className="portfolio__link"
            href="https://github.com/Potachekkk/react-mesto-api-full-gha"
          >
            <p className="portfolio__info">Одностраничное приложение</p>
            <img
              className="portfolio__arrow"
              src={portfolioArrow}
              alt="Стрелка"
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
