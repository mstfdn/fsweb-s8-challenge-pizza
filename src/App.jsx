// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SiparisFormu from './components/SiparisFormu';
import SiparisOnayi from './components/SiparisOnayi'; {/* SiparisOnayi import edilmelidir */}
import styled from 'styled-components';
import Anasayfa from './components/Anasayfa'; {/* Anasayfa import edilmeli */}

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/siparis" element={<SiparisFormu />} />
        <Route path="/onay" element={<SiparisOnayi />} />
      </Routes>
    </Container>
  );
}

export default App;
