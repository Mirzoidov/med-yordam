import React, { Component }from 'react';

export default class Consultation extends Component{
    render() {
        return (
            <section className="consultation">
                <img className='consultation-img' src="images/question-circle-big.png" alt="question-big" />
                <div className="consultation__description">
                    <button className="consultation__description-btn">
                        Консультация от врачей
                    </button> 
                    <h1 className='consultation__description-title'>
                        Получайте бесплатную консультацию от лучших специалистов
                    </h1>
                    <div className="consultation__description-buttons">
                        <button className="consultation__description-buttons-btn">
                            <img src="images/star.png" alt="Star" />
                            Лучшие консультанты
                        </button>
                        <button className="consultation__description-buttons-btn">
                            <img src="images/question-circle.png" alt="Star" />
                            Задать вопрос
                        </button>
                        <button className="consultation__description-buttons-btn">
                            <img src="images/files-landscapes-alt.png" alt="Star" />
                            Популярные вопросы
                        </button>
                    </div> 
                </div>   
                    <div className="consultation__description-result">
                        <div className="consultation__description-result-card">
                            <span>+1 000</span>
                            <p>Врачей различных специализаций </p>
                        </div>
                        <div className="consultation__description-result-card">
                            <span>24/7</span>
                            <p>Доступ к медицинской помощи</p>
                        </div>
                        <div className="consultation__description-result-card">
                            <span>+ 95%</span>
                            <p>Положительных отзывов</p>
                        </div>
                        <div className="consultation__description-result-card">
                            <span>+20 000</span>
                            <p>Анкет пользователей</p>
                        </div>
                    </div>
           </section>
        )
    }
 
}  