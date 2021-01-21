import React from "react";
import './App.css';
import Banner from "./components/Banner";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductsContextProvider from "./Global/ProductsContext";







function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ProductsContextProvider>
        <Products />
      </ProductsContextProvider>

    </div>
  );
}

export default App;
