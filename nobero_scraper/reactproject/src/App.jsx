import React, { useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import { MainPage } from './components/MainPage';
import { ProductPage } from './components/ProductPage';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/products" element={<ProductPage/>}/>
    </Routes>
  );
};

export default App;
