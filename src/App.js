import './App.css';
import React from 'react';
import Home from './app/pages/home/Home';
import {Route, Switch}  from "react-router-dom";
import Dashboard from "./app/pages/dashboard/Dashboard";

function App() {
  return (
                <Switch>
                    <Route exact path='/food' component={Home} />
                    <Route exact path='/food/dashboard' component={Dashboard}/>
                </Switch>


  );
}

export default App;
