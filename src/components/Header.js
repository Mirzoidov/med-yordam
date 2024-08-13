import React, { Component }from 'react';

export default class Header extends Component{
    render() {
        return (
                <header className='header'>
                    <nav className='nav-input'>
                        <div className="input">
                            <img src="images/map-marker.png" alt="map" />
                            <p className='input__city'>Ташкент</p>
                            <img src="images/angle-down.png" alt="icon-down" />
                        </div>
                        <div className="input">
                                <img src="images/RU.png" alt="flag-ru" />
                                <p className='input__languages'>
                                    Язык: 
                                    <span>Русский</span>
                                </p>
                                <img src="images/angle-down.png" alt="icon-down" />
                        </div>
                    </nav>
                    <nav className="menu__item">
                        <div className="menu__item-logo">
                            <a href='#' className="header-logo">
                                <img src="images/plus.png" alt="logo" />
                                Med Yordam
                            </a>
                            <a href="#" className="menu__item-logo-link">Консультация от врачей</a>
                        </div>
                        <button className="menu__item-btn">
                            <img src="images/apps.png" alt="apps" />
                            Каталог услуг
                        </button>
                        <ul className="menu__item-link">
                            <li>
                                <a href="#">О проекте</a>
                            </li>
                            <li>
                                <a href="#">Партнерство</a>
                            </li>
                            <li>
                                <a href="#">Контакты</a>
                            </li>
                        </ul>
                        <div className="menu__item-user">
                            <a href="#" className="menu__item-user-link">Войти </a>/<a href="#" className="menu__item-user-link">Регистрация</a>
                        </div>
                    </nav>
                </header>
        )           
    }
} 
