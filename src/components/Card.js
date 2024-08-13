import React, {Component} from 'react';
import { SassColor } from 'sass';

export default class Card extends Component {
    render() {
        const {
            questionNumber, questionData, 
            answerNumber, answerAuthor,
            answerText, answerImg,
            doctorImg, doctorFullName, doctorDate, doctorAnswer,iconClass
        } = this.props;
        return (
            <div className="card">
                <div className="card-header">
                    <h3>
                        Вопрос: <span>{questionNumber}</span>
                    </h3>
                    <p>
                        {questionData}
                    </p>
                </div>
                <div className="card-body">
                    <div className="card-body-card">
                        <div className="card-body-question-text">
                            <div className="card-body-question-title">
                                <h4>Получено ответов ({answerNumber})</h4>
                                <p>{answerAuthor}</p>
                            </div>
                            <div className="card-body-question-description">
                                <p>
                                    {answerText}
                                    <span>Читать полностью</span>
                                </p>
                            </div> 
                        </div>
                        <div className={iconClass}>
                            <img src={answerImg} alt="icon" />
                        </div>
                    </div>
                    <div className="card-body-card">
                        <div className="card-body-answer-icon">
                            <img src={doctorImg} alt="img" />
                        </div>
                        <div className="card-body-answer-text">
                            <div className="card-body-answer-title">
                                <h4>{doctorFullName}</h4>
                                <p>{doctorDate}</p>
                            </div>
                            <div className="card-body-answer-description">
                                <p>
                                    {doctorAnswer}
                                    <span>Читать полностью</span>
                                </p>
                            </div> 
                        </div>
                    </div>
                    <button className="card-body-btn">
                        Смотреть все ответы (2)
                        <img src="images/angle-down.png" alt="icon-down" />
                    </button>
                </div>
            </div>
        )
    }
}