import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Posts from './pages/DummyApi.jsx';
import Navbar from './components/Navbar.jsx';
import PokeMonApi from './components/PokeMonApi';
import Login from './pages/Login';

const App = () => {
   return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Posts/>} />
        <Route path="/pokemon" element={<PokeMonApi/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;


