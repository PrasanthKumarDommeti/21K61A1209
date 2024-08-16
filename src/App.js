import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProductsPage from './Pages/AllProductsPage';
import ProductPage from './Pages/ProductPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllProductsPage />} />
        <Route path="/companies/:company/categories/:category/products" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
