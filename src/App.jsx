// src/App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Anasayfa from "./components/Anasayfa";
import Section from "./components/Section";
import ProductSection from "./components/ProductSection";
import SiparisFormu from "./components/SiparisFormu";
import SiparisOnayi from "./components/SiparisOnayi";
import Footer from './components/Footer'; 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<>
          <Anasayfa />
          <Section />
          <ProductSection />
          <Footer />
        </>} />
        <Route path="/siparis" element={<SiparisFormu />} />
        <Route path="/onay" element={<SiparisOnayi />} />
      </Routes>
    </>
  );
}

export default App;
