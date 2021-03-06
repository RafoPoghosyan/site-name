import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PassingContentItem from "./app/components/context/AuthContext";
import {HashRouter } from  'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
          <PassingContentItem>
              <App />
          </PassingContentItem>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
