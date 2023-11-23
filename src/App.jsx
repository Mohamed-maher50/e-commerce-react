import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/*">
          <Route index element={<ProductsPage />} />
          <Route path="view" element={<ProductPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
