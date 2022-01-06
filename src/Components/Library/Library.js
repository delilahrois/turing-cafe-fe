import React from 'react';
import Card from '../Card/Card';
import './Library.css';

const Library = ({rezzies}) => {

  const allRezzies = rezzies.map((each) => {
   return (<Card rez={each}/>)
  })

  return (
    <div>{allRezzies}</div>
  )
}

export default Library;