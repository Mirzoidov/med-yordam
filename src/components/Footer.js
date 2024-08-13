import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer__block">
                        <div className="footer__block-card">
                            <a href='#' className="footer-logo">
                                <img src="images/plus.png" alt="logo" />
                                Med Yordam
                            </a>
                            <a href="#" className="menu__item-logo-link">Консультация от врачей</a>
                        </div>
                        <div className="footer__block-card">
                            <h5 className="footer__block-card-title">Выполнить </h5>
                            <ul className="footer__block-card-item">
                                <li><a href="#" className="link-active">Медицинская консультация</a></li>
                                <li><a href="#">Справочник лекарств</a></li>
                                <li><a href="#">Справочник болезней</a></li>
                                <li><a href="#">Справочник лекарств</a></li>
                                <li><a href="#">Справочник Врачей и Клиник</a></li>
                            </ul>
                        </div>
                        <div className="footer__block-card">
                            <h5 className="footer__block-card-title">Каталог услуг</h5>
                            <ul className="footer__block-card-item">
                                <li><a href="#">Задать вопрос</a></li>
                                <li><a href="#"> Лучшие консультанты</a></li>
                                <li><a href="#">Справочник болезней</a></li>
                                <li><a href="#">Популярные вопросы</a></li>
                                <li><a href="#">Регистрация</a></li>
                            </ul>
                        </div>
                        <div className="footer__block-card">
                            <h5 className="footer__block-card-title">Проект</h5>
                            <ul className="footer__block-card-item">
                                <li><a href="#">Информация о проекте</a></li>
                                <li><a href="#">Сотрудничество</a></li>
                                <li><a href="#">Контакты для связи</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__right">
                        <h6>
                            MedYordam 2024 - Все права защищены
                        </h6>
                        <h6>
                            Обработка данных
                        </h6>
                        <h6>
                            Условия использования
                        </h6>
                    </div>
                </div>
            </footer>
        )
    }
}