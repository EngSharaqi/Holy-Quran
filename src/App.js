import React from 'react';
import './App.css';

import Slider from './components/slider';

import TopNav from './components/top-nav';
import Main from './components/main';
import BottomNav from './components/bottom-nav';
import { Routes, Route } from 'react-router-dom';
export default function App(){
  return (
    <div className="App">

      
      <Slider />
      <Main />
      <BottomNav />

      <Routes>
          <Route path="/:num" component={Main} />
          <Route exact path="/" component={App} />
        </Routes>
    </div>
  );
}