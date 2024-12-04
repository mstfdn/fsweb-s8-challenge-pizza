// src/components/Section.jsx
import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  padding: 20px 40px;
  background-color: #f8f8f8;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const NavItem = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${(props) => (props.active ? "#fbc02d" : "white")};
  color: ${(props) => (props.active ? "white" : "#333")};
  border: ${(props) => (props.active ? "none" : "1px solid #ccc")};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.active ? "#f9a825" : "#f0f0f0")};
  }
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;

const LargeImage = styled.div`
  flex: 1;
  background-image: url("../Assets/Iteration-2-aseets/cta/kart-1.png");
  background-size: cover;
  background-position: center;
  height: 300px;
  border-radius: 10px;
`;

const SmallImage = styled.div`
  flex: 1;
  background-image: url("../Assets/Iteration-2-aseets/cta/kart-2.png");
  background-size: cover;
  background-position: center;
  height: 300px;
  border-radius: 10px;
`;

const SmallImageiki = styled.div`
  flex: 1;
  background-image: url("../Assets/Iteration-2-aseets/cta/kart-3.png");
  background-size: cover;
  background-position: center;
  height: 300px;
  border-radius: 10px;
`;

const CenterText = styled.h2`
  text-align: center;
  font-size: 24px;
  margin: 40px 0;
  font-weight: bold;
  color: #333;
`;

const Section = () => {
  return (
    <SectionContainer>
      <Navbar>
        <NavItem>YENİ Kore</NavItem>
        <NavItem active>Pizza</NavItem>
        <NavItem>Burger</NavItem>
        <NavItem>Kızartmalar</NavItem>
        <NavItem>Fast food</NavItem>
        <NavItem>Gazlı İçecek</NavItem>
      </Navbar>

      <ImageContainer>
        <LargeImage />
        <SmallImage />
        <SmallImageiki />
      </ImageContainer>

      <CenterText>en çok paketlenen menüler</CenterText>
    </SectionContainer>
  );
};

export default Section;
