import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import Navbar from './Navbar';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter data-testid='browserRouter-id'>
  <React.StrictMode>
   <App/>
  </React.StrictMode>
  </BrowserRouter>
  
);


