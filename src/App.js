import './App.css';
import React from 'react';
import Home from './app/pages/home/Home';
import {Route, Switch}  from "react-router-dom";
import Dashboard from "./app/pages/dashboard/Dashboard";

function App() {
  return (
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path='/dashboard' >
                <Dashboard/>
            </Route>
        </Switch>
  );
}

export default App;
