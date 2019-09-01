import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import ProductSection from "./components/productsection";
import DetailSection from "./components/details";
import TestinomialSection from "./components/testinomials";

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <HeroSection/>
        <ProductSection/>
        <DetailSection/>
        <TestinomialSection/>
      </main>
    </div>
  );
}

export default App;
