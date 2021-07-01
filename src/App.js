import React from 'react';
import Header from './components/layout/header';
import Meals from './components/meals/Meals';
import './style.css';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
};

export default App;
