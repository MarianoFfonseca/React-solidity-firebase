import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Singin from './components/LOGIN/Singin'
import SinginUp from './components/LOGIN/SingUp'
import NavbarComponent from './components/NAVBAR/Navbar';
import Home from './components/HOME/Home'
import CreateCurses from './components/CREATECURSES/CreateCurses';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavbarComponent></NavbarComponent>
    <Routes>
     
      <Route index element={<Singin />} />
      <Route path="Home" element={<Home />} />
      <Route path="CreateCurses" element={<CreateCurses />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
