import React from 'react';
import "./App.css";

import {Route, Routes } from "react-router-dom";

import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';



const App = ()=> {
  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
        <Routes>
          <Route path='/Dialogs' element={<Dialogs />}/>

          
          <Route path='/Profile' element={<Profile />}/>
        </Routes>
        </div>
      </div>
    
  );
}






export default App;
