// src/components/SiparisOnayi.jsx
import React from 'react';
import styled from 'styled-components';



// Container: Sayfa için genel stil
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  font-family:  "Quattrocento", serif;
  background: red;
`;

// Header: Başlık için stil (Teknolojik Yemekler)
const Header = styled.h1`
  font-size: 3rem;
  color: white;
  margin-top: 20px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5rem;
`;

// SuccessTitle: TEBRİKLER yazısı için stil
const SuccessTitle = styled.h2`
  font-size: 5rem;
  font-weight: lighter;
  text-transform: uppercase;
  color: white;
  letter-spacing: 5px;
  margin: 0;
`;

// SuccessSubtext: SİPARİŞİNİZ ALINDI! yazısı için stil
const SuccessSubtext = styled.h3`
  font-size: 5rem;
  font-weight: lighter;
  text-transform: uppercase;
  color: white;
  margin-top: 10px;
`;

const SiparisOnayi = () => {
  return (
    <Container>
      <Header>Teknolojik Yemekler</Header>
      <SuccessTitle>TEBRİKLER</SuccessTitle>
      <SuccessSubtext>SİPARİŞİNİZ ALINDI!</SuccessSubtext>
    </Container>
  );
};

export default SiparisOnayi;
