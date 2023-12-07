import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
   <section className='about-project'>
    <h2 className='about-project__title main__title'>О проекте</h2>
    <div className="about-project__container">
      <ul className='about-project__list'>
        <li className='about-project__item'>
          <h3 className='about-project__info'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className='about-project__item'>
          <h3 className='about-project__info'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className='about-project__duration'>
        <div className='about-project__element about-project__element_type_backend'>
          <div className='about-project__box about-project__box_type_backend'>
            <p className='about-project__duration_text about-project__duration_text-color'>1 неделя</p>
          </div>
          <p className='about-project__duration_caption'>Back-end</p>
        </div>
        <div className='about-project__element about-project__element_type_frontend'>
          <div className='about-project__box about-project__box_type_frontend'>
            <p className='about-project__duration_text'>4 недели</p>
          </div>
          <p className='about-project__duration_caption'>Front-end</p>
        </div>
      </div>
    </div>
   </section>
  );
};

export default AboutProject;