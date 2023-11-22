import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductsViews from "./pages/ProductsViews";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/view" element={<ProductsViews />} />
      </Routes>
    </>
  );
}

export default App;
