import React, { Component } from 'react'

export default class HomeComponent extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className='home'>
        <h2 className="title">Quiz App</h2>
        <button id="play-btn" onClick={()=> {this.props.handleClick("quiz")}}>Play</button>
      </div>
    )
  }
}