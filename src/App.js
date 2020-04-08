import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Switcher from './Components/Switcher/Switcher';
import Items from './Components/Items/Items';

function App() {
  return (
    <div className="App">
     <Header />
     <Switcher/>
     <Items/>
     <Footer />
    </div>
  );
}

export default App;
