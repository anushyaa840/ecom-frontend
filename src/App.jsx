import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Contact from "./Contact";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      {/* Navbar always visible */}
      <Navbar />

      {/* Pages change here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Product addToCart={addToCart} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
