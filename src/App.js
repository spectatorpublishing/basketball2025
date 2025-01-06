import React  from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
  <Routes>
      {/* Route Definitions */}
      <Route path="/" element={<Home/>} />
      
  </Routes>


  );
}

export default App;
