import React, { Component } from 'react'
import questions from '../questions.json'

export default class QuizComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questionNo: 0,
            score: 0,
            attempted: 0
        }
    }
    // to handle the accuracy and question numbers
    checkAns = (ans) => {
        if (questions[this.state.questionNo].answer === ans) {
            this.setState((prevState) => ({
                score: prevState.score + 1,
                attempted: prevState.attempted + 1
            }), () => {
                this.moveToNext()
            })

        }
        else {
            this.setState((prevState) => ({
                attempted: prevState.attempted + 1
            }), () => {
                this.moveToNext()
            });

        }
    }

    //to move to the next question
    moveToNext = () => {
        if (this.state.questionNo < questions.length - 1) {
            this.setState(prevState => ({
                questionNo: prevState.questionNo + 1
            }))
        }
        else {
            this.props.handleClick(this.state.score, this.state.attempted)
        }
    }

    //to move back to previous question
    moveToPrev = () => {
        if (this.state.questionNo < questions.length - 1) {
            this.setState(prevState => ({
                questionNo: prevState.questionNo - 1,
                attempted: prevState.attempted - 1
            }))
        }
    }

    //to quit the game
    checkOut = () =>{
        let quit = window.confirm("Are you sure you want to quit ?")
        if(quit){this.props.handleClick(this.state.score, this.state.attempted)}
        else{return}
    }
    render() {
        const currentQuestion = questions[this.state.questionNo]
        return (
            <div className="quiz-comp">
                <div className='Question-Box'>
                    <h1 className="text-center status">Question</h1>
                    <h5 className="status">{`${this.state.questionNo + 1} of 5`}</h5>
                    <h3 className="text-center status">{questions[this.state.questionNo].question}</h3>

                    <div className="options-grid">
                        <div className="option text-center" onClick={() => this.checkAns(currentQuestion.optionA)}>{currentQuestion.optionA}</div>
                        <div className="option text-center" onClick={() => this.checkAns(currentQuestion.optionB)}>{currentQuestion.optionB}</div>
                        <div className="option text-center" onClick={() => this.checkAns(currentQuestion.optionC)}>{currentQuestion.optionC}</div>
                        <div className="option text-center" onClick={() => this.checkAns(currentQuestion.optionD)}>{currentQuestion.optionD}</div>
                    </div>
                    <div className="btns">
                        <button id='prev-btn' disabled={this.state.questionNo === 0} onClick={() => this.moveToPrev()}>Previous</button>
                        <button id='next-btn' onClick={() => this.moveToNext()}>Next</button>
                        <button id='quit-btn' onClick={() => this.checkOut()}>Quit</button>
                    </div>

                </div>

            </div>
        )
    }
}