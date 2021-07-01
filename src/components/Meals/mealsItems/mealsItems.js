import React from 'react';
import Classes from './mealsItems.module.css';
import MealsItemsForm from './mealsItemsForm';

const MealsItems = props => {
  return (
    <li>
      <div className={Classes.meal} >
        <h3 className={Classes.name} > {props.name} </h3>
        <p className={Classes.description} > {props.description} </p>
        <p className={Classes.price} > {props.price}$ </p>
      </div>
      <div> <MealsItemsForm /> </div>
    </li>
  );
};

export default MealsItems;
