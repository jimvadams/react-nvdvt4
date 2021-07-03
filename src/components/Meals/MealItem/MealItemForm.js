import React, { useRef , useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
  const inputAmount = useRef();
  const [amounIsValid , setAmountIsValid] =  useState(true);


  const formSubmitHandler = event => {
    event.preventDefault();

    const enteredAmount = inputAmount.current.value;
    const enteredAmountNumber = +enteredAmount;
    console.log(enteredAmount);

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    setAmountIsValid(true);
    props.onAddToCart(enteredAmountNumber);

    
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        ref={inputAmount}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '0',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button>+ Add</button>
      {!amounIsValid && <p>Please enter a valid Amount!</p> } 
    </form>
  );
};

export default MealItemForm;
