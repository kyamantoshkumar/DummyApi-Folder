// import React from 'react';
// import './App.css';
// import {BrowserRouter, Route, Routes } from 'react-router-dom'
// import Navbar from './components/Navbar';
// import Posts from './pages/DummyApi';

// const App = ()  => {
//   return (
//    <>
//       <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Posts/>}/>
//       </Routes>
//       </BrowserRouter>
//     </>
  
//   );
// }

// export default App;

import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Posts from './pages/DummyApi.jsx';
// import ECommerce from './Components/Ecommerce';
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


