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
  background-color: ${(props) => (props.active ? "#white" : "white")};
  color: ${(props) => (props.active ? "black" : "#333")};
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${(props) => (props.active ? "#f9a825" : "#f0f0f0")};
  }
`;

const NavIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
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
        <NavItem>
          <NavIcon src="../Assets/Iteration-2-aseets/icons/1.svg" />
          YENİ Kore
        </NavItem>
        <NavItem active>
          <NavIcon src="../Assets/Iteration-2-aseets/icons/2.svg" />
          Pizza
        </NavItem>
        <NavItem>
          <NavIcon src="../Assets/Iteration-2-aseets/icons/3.svg" />
          Burger
        </NavItem>
        <NavItem>
          <NavIcon src="../Assets/Iteration-2-aseets/icons/4.svg" />
          Kızartmalar
        </NavItem>
        <NavItem>
          <NavIcon src="../Assets/Iteration-2-aseets/icons/5.svg" />
          Fast food
        </NavItem>
        <NavItem>
          <NavIcon src="../Assets/Iteration-2-aseets/icons/6.svg" />
          Gazlı İçecek
        </NavItem>
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
