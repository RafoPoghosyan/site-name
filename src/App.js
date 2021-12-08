import './App.css';
import React from 'react';
import Home from './app/pages/home/Home';
import { BrowserRouter, Route, Routes}  from "react-router-dom";
import Dashboard from "./app/pages/dashboard/Dashboard";

function App() {
  return (

            <Routes>
                <Route exact path={'/food'} element={<Home/>} />
                <Route exact path={'/dashboard'} element={<Dashboard/>}/>
            </Routes>

  );
}

export default App;
