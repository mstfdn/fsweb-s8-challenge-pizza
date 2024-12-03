// src/components/Anasayfa.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Anasayfa = () => {
  return (
    <div>
      
      <p>Acıktırır pizza, doyurur.</p>
      <Link to="/siparis">
        <button>Acıktım!</button>
      </Link>
    </div>
  );
};

export default Anasayfa;
