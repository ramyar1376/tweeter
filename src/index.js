import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core';
import { Theme } from './theme/theme';
import Main from './layout/main';




ReactDOM.render(


  <ThemeProvider theme={Theme}>
    <React.StrictMode>
     <Main/>

    </React.StrictMode>

  </ThemeProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
