import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MainApp } from './09-useContext/MainApp';
import { BrowserRouter } from 'react-router-dom';
// import { HooksApp } from './HooksApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <HooksApp /> */}
      <MainApp />
    </React.StrictMode>,
  </BrowserRouter>
)
