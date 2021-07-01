import React from 'react';
import style from './header.module.css';
import HeaderCart from './headerCart';

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <h1>Great Meals</h1>
        <HeaderCart/>
      </header>
      <div className={style['main-image']}>
        <img
          src="https://paleomg.com/wp-content/uploads/2019/07/easy-meals-scaled.jpg"
          alt="a great meal"
        />
      </div>
    </>
  );
};

export default Header;
