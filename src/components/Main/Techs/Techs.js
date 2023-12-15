import React from "react";
import "./Techs.css";

const Techs = () => {
  return (
    <section className="techs">
      <h2 className="techs__title main__title">Технологии</h2>
      <div className="techs__container">
        <h3 className="techs__text">7 технологий</h3>
        <p className="techs__description">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__item">
            <p className="techs__caption">HTML</p>
          </li>
          <li className="techs__item">
            <p className="techs__caption">CSS</p>
          </li>
          <li className="techs__item">
            <p className="techs__caption">JS</p>
          </li>
          <li className="techs__item">
            <p className="techs__caption">React</p>
          </li>
          <li className="techs__item">
            <p className="techs__caption">Git</p>
          </li>
          <li className="techs__item">
            <p className="techs__caption">Express.js</p>
          </li>
          <li className="techs__item">
            <p className="techs__caption">MongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;
