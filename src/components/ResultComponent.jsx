import React, { Component } from 'react'

export default class ResultComponent extends Component {
    constructor(props) {
        super(props)
    }
    // to give remarks based on score
    remarks = (percent) => {
        switch (true) {
            case percent <= 30:
                return "You Need Practice!"
            case percent <= 60:
                return "You did good!"
            case percent <= 90:
                return "Almost there!"
            case percent > 90:
                return "Perfecto!"
        }
    }
    render() {
        const percentage = (this.props.score / 5) * 100
        let attempted = this.props.attempted
        if (attempted < 0) { attempted = 0 }
        return (
            <div className='result-card'>
                <h1 className='text-center title-prime' style={{ color: "green" }}>Result</h1>
                <div className="result">

                    <div className="status">
                        <h3 className="text-center top-heading">{this.remarks(percentage)}</h3>
                        <h1 className='text-center' style={{ color: "blue" }}>{`Your score is ${percentage}%`}</h1>

                        <table id='stats-table'>
                            <tbody>
                                <tr>
                                    <td>Total number of questions</td>
                                    <td className='text-right'>5</td>
                                </tr>
                                <tr>
                                    <td>Number of attempted questions</td>
                                    <td className='text-right'>{attempted}</td>
                                </tr>
                                <tr>
                                    <td>Number of corrected questions</td>
                                    <td className='text-right'>{this.props.score}</td>
                                </tr>

                                <tr>
                                    <td>Number of wrong questions</td>
                                    <td className='text-right'>{attempted - this.props.score}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="result-button">
                    <button id='play-again-btn' onClick={() => { this.props.handleClick("quiz") }}>Play Again</button>
                    <button id='backto-home-btn' onClick={() => { this.props.handleClick("home") }}>Back To Home</button></div>

            </div>
        )
    }
}