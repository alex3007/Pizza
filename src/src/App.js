import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SwitcherContainer from './Components/Switcher/SwitcherContainer';
import ItemsContainer from './Components/Items/ItemsContainer';
import {Switch, Route} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import ContactPage from './Components/ContactPage/ContactPage';
import FeedbackPageContainer from "./Components/FeedbackPage/FeedbackPageContainer";

function App(props) {

    let path = props.store.getState().path;
    let state = props.store.getState();
    return (
        <div className="App">
            <Header path={path}/>
            <SwitcherContainer path={path}/>
            <Switch>
                <Route path={path.contacts} render=
                    {() => <ContactPage state={state}/>}/>
                <Route exact path={path.feedbacks} render=
                    {() => <FeedbackPageContainer state={state}
                                                  dispatch={props.dispatch}/>}/>
                <Route path={path.food} render=
                    {() => <ItemsContainer path={path.food} state={state}/>}/>
                <Route path={path.drinks} render=
                    {() => <ItemsContainer path={path.drinks} state={state}/>}/>
                <Route path={path.dishes} render=
                    {() => <ItemsContainer path={path.dishes} state={state}/>}/>
                <Route path={path.home} render=
                    {() => <HomePage state={state}/>}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
