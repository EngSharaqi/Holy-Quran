import React from 'react';
import './App.css';

import Slider from './components/slider';

import TopNav from './components/top-nav';
import Main from './components/main';
import BottomNav from './components/bottom-nav'
export default function App(){
  return (
    <div className="App">

      <TopNav />
      <Slider />
      <Main />
      <BottomNav />
    </div>
  );
}