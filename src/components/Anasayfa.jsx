// src/components/Anasayfa.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-image: url("../../Assets/Iteration-1-assets/home-banner.png");
  background-size: cover;
  background-position: center;
  height: 80vh;
  color: white;
  
`;

const Heading = styled.h1`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: "Roboto Mono", serif;
  font-weight: 100;
`;

const SubText = styled.span`
  display: block;
  font-size: 70px;
  margin-top: 50px;
  font-family: "Roboto Mono", serif;
  font-optical-sizing: auto;
`;

const SubTextiki = styled.span`
  display: block;
  font-size: 70px;
  margin-top: 10px;
  font-family: "Roboto Mono", serif;
  font-optical-sizing: auto;
`;

const SubTextuc = styled.span`
  display: block;
  font-size: 20px;
  margin-top: 50px;
  font-family: "Satisfy", serif;
  font-weight: 900;
  font-style: oblique;
  color: yellow;
`;

const Button = styled.button`
  padding: 20px 60px;
  background-color: #fbc02d;
  border: none;
  border-radius: 40px;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f9a825;
  }
`;

const Anasayfa = () => {
  return (
    <Container>
      <Heading>
        Teknolojik Yemekler
        <SubTextuc>fırsatı kaçırma </SubTextuc>
        <SubText>KOD ACIKTIRIR </SubText>
        <SubTextiki>PİZZA, DOYURUR.</SubTextiki>
      </Heading>
      <Link to="/siparis">
        <Button>ACIKTIM</Button>
      </Link>
    </Container>
  );
};

export default Anasayfa;
