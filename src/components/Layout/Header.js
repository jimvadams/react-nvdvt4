import React from 'react';
import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img
          src="https://urbanplates.com/wp-content/uploads/2018/06/family-meals.jpg"
          alt="A table full of delicious food!"
        />
      </div>
    </Fragment>
  );
};

export default Header;
