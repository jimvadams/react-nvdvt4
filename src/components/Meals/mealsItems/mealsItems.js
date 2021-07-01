import React from  'react';

const MealsItems = (props) => {
  return (
    <li>
      <div><h1> {props.name} </h1></div>
      <div><p> {props.description} </p></div>
      <div> {props.price}$ </div>
    </li>
  )
}

export default MealsItems;