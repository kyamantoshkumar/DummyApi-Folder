import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Posts from './pages/DummyApi.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
   return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Posts/>} />
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;


