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
  height: 100vh;
  color: white;
`;

const Heading = styled.h1`
  font-size: 70px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: "Barlow", serif;
  font-weight: 100;
`;

const SubText = styled.span`
  display: block;
  font-size: 70px;
  margin-top: 10px;
  font-family: "Roboto Mono", serif;
  font-optical-sizing: auto;
`;

const Button = styled.button`
  padding: 20px 40px;
  background-color: #fbc02d;
  border: none;
  border-radius: 10px;
  font-size: 16px;
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
        <SubText>KOD ACIKTIRIR PİZZA DOYURUR.</SubText>
      </Heading>
      <Link to="/siparis">
        <Button>Acıktım!</Button>
      </Link>
    </Container>
  );
};

export default Anasayfa;
