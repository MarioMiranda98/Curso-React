import React from 'react';
import ReactDOM from 'react-dom/client';
import { App }from './App';
// import { FirstApp } from './components/FirstApp';
import { CounterApp } from './components/CounterApp';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App/>
    {/* <FirstApp title='Hola, Soy Goku!'/> */}
    <CounterApp value={10} />
  </React.StrictMode>
);