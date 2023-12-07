import React from "react";
import { Link } from 'react-router-dom'
import './Auth.css';
import logo from '../../images/logo-svg.svg'

const Auth = ({title, children, buttonText, linkText, linkTitle, link}) => {
    return (
        <main className="auth section">
            <div className="auth__container">
                <div className="auth__header">
                    <Link to='/' className="auth__logo-link">
                        <img src={logo} alt='Логотип'className="auth__logo-image"/>
                    </Link>
                    <h1 className="auth__title">{title}</h1>
                    <form name="auth" className="auth__form">{children}</form>
                </div>
                <div className="auth__footer">
                    <span className="auth__error-text auth__error-text_active">Ошибка</span>
                    <button type="submit" className="auth__submit-button">{buttonText}</button>
                    <div className="auth__link-container">
                        <p className="auth__text">{linkText}</p>
                        <Link to={link} className="link">
                            <p className="auth__link">{linkTitle}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Auth;