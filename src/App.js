import React from 'react'
import { Navbar, Header, Button} from './components/index2';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import { RiRouterFill } from 'react-icons/ri';


const App = () => {
  return (
    <div className= "App">
      <div className= "gradient__bg">
        <Router>
        <Navbar />
        <Header />
        <Button/>
        <Router/>
      </div>
    </div>
  )
}

export default App 
