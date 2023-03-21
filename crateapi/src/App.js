import React from 'react';
import './App.css';
import {Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar';
import Posts from './pages/DummyApi';
function App() {
  return (
   <>
    
      <Navbar />
      <Routes>
        <Route path='/' element={<Posts/>}/>
      </Routes>
    </>
  
  );
}

export default App;
