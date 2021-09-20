import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import "./App.css";
import ProductsProvider from "./context/productsContext";

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Header />
        <Body />
      </ProductsProvider>
      <Footer />
    </div>
  );
}

export default App;
