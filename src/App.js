import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserList from './pages/UserList';

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/coups-de-coeur" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;