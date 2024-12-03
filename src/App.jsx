import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SiparisFormu from './components/SiparisFormu';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

function App() {
  return (
    <Container>
      <h1>Teknolojik Yemekler</h1>
      <Routes>
        <Route path="/" element={<SiparisFormu />} />
      </Routes>
    </Container>
  );
}

export default App;