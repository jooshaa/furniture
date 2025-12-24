import React from 'react';
import MainLayout from './layout/MainLayout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout>
      </MainLayout>} />
    </Routes>
  );
}

export default App;