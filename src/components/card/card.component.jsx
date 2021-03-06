import React from 'react';

import './card.component.css'

export const Card = (props) => (
  <div className='card-container'>
    <img src={`https://robohash.org/${props.monster.id}?2set=set9&size=180x180`} alt="robot monster"/>
    <h2> {props.monster.name} </h2>
    <p> {props.monster.email} </p>
  </div>
)