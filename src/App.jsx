import './App.css'
import React, { Component } from 'react'
import HomeComponent from './components/HomeComponent'
import QuizComponent from './components/QuizComponent'
import ResultComponent from './components/ResultComponent'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: <HomeComponent handleClick={this.switchPage} />,
      score: 0,
      attempted: 0
    }
  }
  // to show handle the results
  showResults = (score, attempted) =>{
    this.setState({
      score : score,
      attempted : attempted
    }, () =>{
      this.switchPage("result")
    })
    
  } 

  // to handle the switching between pages
  switchPage = (pageName) =>{
    switch (pageName) {
      case "quiz":
        this.setState({page : <QuizComponent handleClick={this.showResults} />})
        break
      case "result":
        this.setState({page: <ResultComponent handleClick={this.switchPage} score = {this.state.score} attempted = {this.state.attempted}/>})
        break
      default:
        this.setState({page : <HomeComponent handleClick={this.switchPage} />})
    }
  }
  render() {
    return (<div>{this.state.page}</div>)
  }
}