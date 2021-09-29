import React from 'react'
import { Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CartComponent from './components/CartComponent';
import DefaultComponent from './components/DefaultComponent';
import DetailsComponent from './components/DetailsComponent';
import NavbarComponent from './components/NavbarComponent';
import ProductComponent from './components/ProductComponent';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';





const  App = () => {
  return (
    <>
    <NavbarComponent/>
    <Switch>
      <Route exact path='/' component={ProductComponent}/>
      <Route exact path='/details' component={DetailsComponent}/>
      <Route exact path='/cart' component={CartComponent}/>
      <Route exact path='/login' component={LoginComponent}/>
      <Route exact path='/signup' component={SignupComponent}/>
      <Route component={DefaultComponent}/>
    </Switch>
    </>
  );
}

export default App;
