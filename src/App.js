import React  from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import GeneralArticles from './pages/GeneralArticles';

function App() {
  return (
  <Routes>
      {/* Route Definitions */}
      <Route path="/" element={<Home/>} />
      <Route path="/all" element={<GeneralArticles/>} />
      
  </Routes>


  );
}

export default App;
