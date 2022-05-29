import React from 'react';
import Header from './components/header/header.jsx';
import Navbar from './components/navbar/navbar';
import app from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/main/glxavor/home.jsx';
import Footer from './components/footer/Footer.jsx';
import MerMasin from './components/main/mermasin/MerMasin.jsx';



function App() {
  return (
    <div className={app.App}>
      <Header/>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route path='glxavor' element={<Home/>}/>
          <Route path='mermasin' element={<MerMasin/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
