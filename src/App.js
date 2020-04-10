import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Switcher from './Components/Switcher/Switcher';
import Items from './Components/Items/Items';
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {

    let pathFood = '/food';
    let pathDrinks = '/drinks';
    let pathDishes = '/dishes';

  return (
    <div className="App">
     <Header />
     <Switcher />
     <Route path={pathFood} render=
            {() => <Items store={props.store} path={pathFood} /> } />
     <Route path={pathDrinks} render=
            {() => <Items store={props.store} path={pathDrinks} /> } />
     <Route path={pathDishes} render=
            {() =><Items store={props.store} path={pathDishes} /> } />

     <Footer />
    </div>
  );
}

export default App;
