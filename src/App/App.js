import React, { Component } from 'react';
// import Library from '../Components/Library/Library';
import Card from '../Components/Card/Card';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allRezzies: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => this.setState({allRezzies: data}))
  }

  renderReservations() {
    const allRezzies = this.state.allRezzies.map((each) => {
      return (<Card rez={each}/>)
     })
    return allRezzies
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          {this.renderReservations()}
        </div>
      </div>
    )
  }
}

export default App;
