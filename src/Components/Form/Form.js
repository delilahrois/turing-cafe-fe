import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: '',
      dateInput: '',
      timeInput: '',
      guestsInput: ''
    }
  }

  createRez = (e) => {
    e.preventDefault();
    const newRez = {
      id: Date.now(),
      name: this.state.nameInput,
      date: this.state.dateInput,
      time: this.state.timeInput,
      number: parseInt(this.state.guestsInput)
    }
    this.props.handleChange(newRez)
    this.setState({ 
      nameInput: '',
      dateInput: '',
      timeInput: '',
      guestsInput: ''
    })
  }
  
render(){
  return (
    <form className="rez-form">
      <label for="name-input"></label>
      <input type="text" placeholder="Name" className="text-input" id="name-input" onChange={(e) => this.setState({nameInput: e.target.value})}></input>


      <label for="date-input"></label>
      <input type="text" placeholder="Date (mm/dd)" className="text-input" id="date-input" onChange={(e) => this.setState({dateInput: e.target.value})}></input>

      <label for="time-input"></label>
      <input type="text" placeholder="Time" className="text-input" id="time-input" onChange={(e) => this.setState({timeInput: e.target.value})}></input>

      <label for="guests-input"></label>
      <input type="text" placeholder="Number of guests" className="text-input" id="guests-input" onChange={(e) => this.setState({number: e.target.value})}></input>

      <button className="make-rez-button" onClick={(e) => this.createRez(e)}>Make Reservation</button>
    </form>
  )
}
}

export default Form;