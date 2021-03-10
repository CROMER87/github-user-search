import React from 'react';
import { ToastContainer } from 'react-toastify';
import './app.scss';
import './core/assets/styles/custom.scss';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';


const App = () => {
  return (
    <>
        <ToastContainer
        
        />
        <Routes />
    </>
);
}

export default App;
