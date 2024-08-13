import React, { Component } from "react";
import Card from "./Card";

export default class Main extends Component {
    render() {
        return (
            <main className="main">
                <div className="main__left">
                    <div className="main__left-filter">
                        <h2>Фильтрация по направлениям</h2>
                        <button className="main__left-reset">
                            <img src="images/x.png" alt="reset" />
                            Сбросить 
                        </button>
                    </div>
                    <form action="" className="main__left-input">
                        <div className="main__left-input-search">
                            <input type="search" className="main__left-search" placeholder="Поиск направления"/>
                            <img src="images/search.png" alt="search" className=""/>
                        </div>
                        <label className="checkbox-wrapper">
                            <input type="checkbox" className="checkbox-element" />
                                <span className="checkbox-wrapper-title">Аллерголог </span>
                                <span className="checkbox-wrapper-number">(12 312) </span>
                        </label>    
                        <label className="checkbox-wrapper">
                            <input type="checkbox" className="checkbox-element" />
                                <span className="checkbox-wrapper-title">Андролог </span>
                                <span className="checkbox-wrapper-number">(12 312) </span>
                        </label>    
                        <label className="checkbox-wrapper">
                            <input type="checkbox" className="checkbox-element" />
                                <span className="checkbox-wrapper-title">Венеролог </span>
                                <span className="checkbox-wrapper-number">(12 312) </span>
                        </label>    
                        <label className="checkbox-wrapper">
                            <input type="checkbox" className="checkbox-element" checked/>
                                <span className="checkbox-wrapper-title">Врач УЗИ </span>
                                <span className="checkbox-wrapper-number checkbox-active">(12 312) </span>
                        </label>    
                        <label className="checkbox-wrapper">
                            <input type="checkbox" className="checkbox-element" />
                                <span className="checkbox-wrapper-title">Гастроэтеролог </span>
                                <span className="checkbox-wrapper-number">(12 312) </span>
                        </label>    
                        <label className="checkbox-wrapper">
                            <input type="checkbox" className="checkbox-element" />
                                <span className="checkbox-wrapper-title">Гематолог </span>
                                <span className="checkbox-wrapper-number">(12 312) </span>
                        </label>    
                        <label className="checkbox-wrapper">
                            <input type="checkbox" className="checkbox-element" />
                                <span className="checkbox-wrapper-title">Генетик </span>
                                <span className="checkbox-wrapper-number">(12 312) </span>
                        </label>    
                        <label className="checkbox-wrapper">
                            <input type="checkbox" className="checkbox-element" />
                                <span className="checkbox-wrapper-title">Гинеколог </span>
                                <span className="checkbox-wrapper-number">(12 312) </span>
                        </label>    
                        <label className="checkbox-wrapper">
                            <input type="checkbox" className="checkbox-element" />
                                <span className="checkbox-wrapper-title">Дерматолог </span>
                                <span className="checkbox-wrapper-number">(12 312) </span>
                        </label>       
                        <label className="checkbox-wrapper">
                            <input type="checkbox" className="checkbox-element" />
                                <span className="checkbox-wrapper-title">Диетолог </span>
                                <span className="checkbox-wrapper-number">(12 312) </span>
                        </label>       
                        <label className="checkbox-wrapper">
                            <input type="checkbox" className="checkbox-element" />
                                <span className="checkbox-wrapper-title">Инфекционист </span>
                                <span className="checkbox-wrapper-number">(12 312) </span>
                        </label>       
                        <label className="checkbox-wrapper">
                            <input type="checkbox" className="checkbox-element" />
                                <span className="checkbox-wrapper-title">ЛОР </span>
                                <span className="checkbox-wrapper-number">(12 312) </span>
                        </label>       
                        <label className="checkbox-wrapper">
                            <input type="checkbox" className="checkbox-element" />
                                <span className="checkbox-wrapper-title">Маммолог </span>
                                <span className="checkbox-wrapper-number">(12 312) </span>
                        </label>       
                        <label className="checkbox-wrapper">
                            <input type="checkbox" className="checkbox-element" />
                                <span className="checkbox-wrapper-title">Нарколог </span>
                                <span className="checkbox-wrapper-number">(12 312) </span>
                        </label>       
                    </form>
                </div>
                <div className="main__right">
                    <div className="main__right-header">
                        <h2 className="main__right-header-title">Список последних ответов на вопросы 
                            <span>(12 493)</span>
                        </h2>
                        <button className="main__right-header-btn">
                            <img src="images/sort-amount-up.png" alt="Sort-amount" />
                            Сортировать по
                        </button>
                    </div>
                    <div className="main__right-search">
                        <input type="search" placeholder="Искать по тексту в вопросе"/>
                        <button className="main__right-search-btn">
                            <img src="images/search-white.png" alt="Search" />
                            Поиск
                        </button>
                    </div>
                    <Card 
                        questionNumber="21408"
                        questionData="Январь 27, 2024 9:41 pm"
                        answerNumber="3"
                        answerAuthor="Lorri Warf (26 лет)"
                        answerText="Здравствуйте, доктор. В последнее время я заметил(а), что стал(а)
                                 быстро уставать и появилась постоянная усталость, несмотря на 
                                 полноценный сон. К тому же, у меня снизился аппетит, и я замечаю 
                                 периодические головные боли. Могли бы вы подсказать, что это 
                                 может быть и какие обследования мне стоит пройти для уточнения..."
                        answerImg ="images/icon2.png"
                        doctorImg="images/img-men.png"  
                        doctorFullName="Mary Freund (Гастроинтеролог)"    
                        doctorDate="Январь 28, 2024 9:41 pm"  
                        doctorAnswer="Можете ли вы, пожалуйста, объяснить, какие могут быть причины моих текущих симптомов (укажите свои симптомы), какие диагностические тесты вы рекомендуете для подтверждения диагноза, и какие методы лечения или изменения в образе жизни вы считаете наиболее эффективными для улучшения моего..." 
                        iconClass="card-body-question-icon-blue"
                    />
                    <Card 
                        questionNumber="21408"
                        questionData="Январь 27, 2024 9:41 pm"
                        answerNumber="3"
                        answerAuthor="Kimberly Mastrangelo (24 лет)"
                        answerText="Здравствуйте, доктор. В последнее время я заметил(а), что стал(а)
                                 быстро уставать и появилась постоянная усталость, несмотря на 
                                 полноценный сон. К тому же, у меня снизился аппетит, и я замечаю 
                                 периодические головные боли. Могли бы вы подсказать, что это 
                                 может быть и какие обследования мне стоит пройти для уточнения..."
                        answerImg ="images/icon1.png"
                        doctorImg="images/img-men.png"  
                        doctorFullName="Mary Freund (Гастроинтеролог)"    
                        doctorDate="Январь 28, 2024 9:41 pm"  
                        doctorAnswer="Можете ли вы, пожалуйста, объяснить, какие могут быть причины моих текущих симптомов (укажите свои симптомы), какие диагностические тесты вы рекомендуете для подтверждения диагноза, и какие методы лечения или изменения в образе жизни вы считаете наиболее эффективными для улучшения моего..." 
                        iconClass= "card-body-question-icon-pink"
                    />
                    <Card 
                        questionNumber="21408"
                        questionData="Январь 27, 2024 9:41 pm"
                        answerNumber="3"
                        answerAuthor="Lorri Warf (26 лет)"
                        answerText="Здравствуйте, доктор. В последнее время я заметил(а), что стал(а)
                                 быстро уставать и появилась постоянная усталость, несмотря на 
                                 полноценный сон. К тому же, у меня снизился аппетит, и я замечаю 
                                 периодические головные боли. Могли бы вы подсказать, что это 
                                 может быть и какие обследования мне стоит пройти для уточнения..."
                        answerImg ="images/icon2.png"
                        doctorImg="images/img-men.png"  
                        doctorFullName="Mary Freund (Гастроинтеролог)"    
                        doctorDate="Январь 28, 2024 9:41 pm"  
                        doctorAnswer="Можете ли вы, пожалуйста, объяснить, какие могут быть причины моих текущих симптомов (укажите свои симптомы), какие диагностические тесты вы рекомендуете для подтверждения диагноза, и какие методы лечения или изменения в образе жизни вы считаете наиболее эффективными для улучшения моего..." 
                        iconClass="card-body-question-icon-blue"
                    />
                    <Card 
                        questionNumber="21408"
                        questionData="Январь 27, 2024 9:41 pm"
                        answerNumber="3"
                        answerAuthor="Kimberly Mastrangelo (24 лет)"
                        answerText="Здравствуйте, доктор. В последнее время я заметил(а), что стал(а)
                                 быстро уставать и появилась постоянная усталость, несмотря на 
                                 полноценный сон. К тому же, у меня снизился аппетит, и я замечаю 
                                 периодические головные боли. Могли бы вы подсказать, что это 
                                 может быть и какие обследования мне стоит пройти для уточнения..."
                        answerImg ="images/icon1.png"
                        doctorImg="images/img-men.png"  
                        doctorFullName="Mary Freund (Гастроинтеролог)"    
                        doctorDate="Январь 28, 2024 9:41 pm"  
                        doctorAnswer="Можете ли вы, пожалуйста, объяснить, какие могут быть причины моих текущих симптомов (укажите свои симптомы), какие диагностические тесты вы рекомендуете для подтверждения диагноза, и какие методы лечения или изменения в образе жизни вы считаете наиболее эффективными для улучшения моего..." 
                        iconClass= "card-body-question-icon-pink"
                    />
                    <Card 
                        questionNumber="21408"
                        questionData="Январь 27, 2024 9:41 pm"
                        answerNumber="3"
                        answerAuthor="Lorri Warf (26 лет)"
                        answerText="Здравствуйте, доктор. В последнее время я заметил(а), что стал(а)
                                 быстро уставать и появилась постоянная усталость, несмотря на 
                                 полноценный сон. К тому же, у меня снизился аппетит, и я замечаю 
                                 периодические головные боли. Могли бы вы подсказать, что это 
                                 может быть и какие обследования мне стоит пройти для уточнения..."
                        answerImg ="images/icon2.png"
                        doctorImg="images/img-men.png"  
                        doctorFullName="Mary Freund (Гастроинтеролог)"    
                        doctorDate="Январь 28, 2024 9:41 pm"  
                        doctorAnswer="Можете ли вы, пожалуйста, объяснить, какие могут быть причины моих текущих симптомов (укажите свои симптомы), какие диагностические тесты вы рекомендуете для подтверждения диагноза, и какие методы лечения или изменения в образе жизни вы считаете наиболее эффективными для улучшения моего..." 
                        iconClass="card-body-question-icon-blue"
                   />
                    <div className="main__right-footer">
                            <div className="main__right-footer-icon">
                                <i class="fa-solid fa-angle-left"></i>                            </div>
                            <div className="main__right-footer-number active-number">
                                <p>1</p>
                            </div>
                            <div className="main__right-footer-number">
                                <p>2</p>
                            </div>
                            <div className="main__right-footer-number">
                                <p>3</p>
                            </div>
                            <div className="main__right-footer-number">
                                <p>4</p>
                            </div>
                            <div className="main__right-footer-number">
                                <p>...</p>
                            </div>
                            <div className="main__right-footer-icon">
                                <i class="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                </div>
            </main>
        );   
    }
}