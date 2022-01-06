import React from 'react';
import './Card.css';

const Card = ({rez}) => {

  return (
    <div className="card">
      <h3>{rez.name}</h3>
      <p>{rez.date}</p>
      <p>{rez.time} pm</p>
      <p>Number of guests: {rez.number}</p>
      <button className="cancel-button">Cancel</button>
    </div>
  )
}

export default Card;