import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SwitcherContainer from './Components/Switcher/SwitcherContainer';
import ItemsContainer from './Components/Items/ItemsContainer';
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {

    let path = props.store.getState().path;
    let state = props.store.getState();
    return (
        <div className="App">
            <Header/>
            <SwitcherContainer path={path} />
            <Route path={path.food} render=
                {() => <ItemsContainer path={path.food} state={state}/>}/>
            <Route path={path.drinks} render=
                {() => <ItemsContainer path={path.drinks} state={state}/>}/>
            <Route path={path.dishes} render=
                {() => <ItemsContainer path={path.dishes} state={state}/>}/>
            <Footer/>
        </div>
    );
}

export default App;
