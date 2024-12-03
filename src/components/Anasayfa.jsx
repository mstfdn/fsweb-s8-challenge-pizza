// src/components/Anasayfa.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Anasayfa.css'; // CSS dosyasını import edin

const Anasayfa = () => {
  return (
    <div className="container">
      <h1>Teknolojik Yemekler</h1>
      <p className="heading">
        KOD ACIKTIRIR <span className="sub-text">PİZZA DOYURUR.</span>
      </p>
      <Link to="/siparis">
        <button className="button">Acıktım!</button>
      </Link>
    </div>
  );
};

export default Anasayfa;
