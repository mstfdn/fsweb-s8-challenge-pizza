import React from "react";
import { Link } from "react-router-dom";
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
  justify-content: center; /* Yatayda ortaya hizalama */
  align-items: center; /* Dikeyde hizalama */
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column; /* Küçük ekranlar için dikey hizalama */
  }
`;

const LargeImage = styled.div`
  position: relative;
  background-image: url("../Assets/Iteration-2-aseets/cta/kart-1.png");
  background-size: cover;
  background-position: center;
  height: 446px;
  width: 514px;
  border-radius: 10px;
`;

const SmallImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SmallImage = styled.div`
  position: relative;
  background-image: url("../Assets/Iteration-2-aseets/cta/kart-2.png");
  background-size: cover;
  background-position: center;
  height: 200px;
  width: 500px;
  border-radius: 10px;
`;

const SmallImageiki = styled.div`
  position: relative;
  background-image: url("../Assets/Iteration-2-aseets/cta/kart-3.png");
  background-size: cover;
  background-position: center;
  height: 200px;
  width: 508px;
  border-radius: 10px;
`;


const CenterText = styled.h2`
  text-align: center;
  font-size: 24px;
  margin: -1rem;
  color: red;
  font-family: "Satisfy", cursive;
  font-weight: 400; /* Satisfy sadece regular destekler, bunu 400 yapabilirsiniz */
  font-style: oblique;
`;


const SubText = styled.p`
  text-align: center;
  font-family: "Barlow";
  font-size: 32px;
  margin: 2rem;
  font-weight: bold;
  color: #333;
`;

const Heading = styled.h3`
  position: absolute;
  text-align: left;
  top: 20px;
  left: 30px;
  color: white;
  font-family: "Roboto Mono", sans-serif;
  font-weight: 900;
  font-size: 50px;
  line-height: 1.2; /* Sütunlar arasında mesafe */

  &::before {
    content: "Özel"; /* Üstteki yazıyı belirle */
    display: block;
  }

  &::after {
    content: "Lezzetus"; /* Alttaki yazıyı belirle */
    display: block;
  }
`;


const Headingiki = styled.h3`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  font-family: "Roboto Mono", sans-serif;
  font-weight: 900;
  font-size: 24px;
`;

const Headinguc = styled.h3`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  font-family: "Roboto Mono", sans-serif;
  font-weight: 900;
  font-size: 24px;
`;

const Subheading = styled.p`
  position: absolute;
  bottom: 250px;
  left: 30px;
  color: white;
  font-size: 18px;
  font-family: "Roboto Mono", sans-serif;
  font-weight: 400;
`;

const Subheadingiki = styled.p`
  position: absolute;
  bottom: 80px;
  left: 20px;
  color: white;
  font-size: 18px;
  font-family: "Roboto Mono", sans-serif;
  font-weight: 900;
`;

const Subheadinguc = styled.p`
  position: absolute;
  bottom: 105px;
  right: 320px;
  color: black;
  font-size: 20px;
  font-family: "Roboto Mono", sans-serif;
  font-weight: 900;
`;

const Subheadingdrt = styled.p`
  position: absolute;
  bottom: 80px;
  left: 20px;
  color: black;
  font-size: 18px;
  font-family: "Roboto Mono", sans-serif;
  font-weight: 900;
`;

const Button = styled.button`
  position: absolute;
  bottom: 20px;
  left: 20px;
  padding: 15px 25px;
  background-color: white;
  color: red;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;

  &:hover {
    background-color: #f9a825;
  }
`;

const Buttoniki = styled.button`
  position: absolute;
  bottom: 210px;
  left: 30px;
  padding: 15px 25px;
  background-color: white;
  color: red;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;

  &:hover {
    background-color: #f9a825;
  }
`;



const Section = () => {
  return (
    <SectionContainer>
      <Navbar>
        <NavItem>
          <NavIcon src="../Assets/Iteration-2-aseets/icons/1.svg" />
          YENİ! Kore
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
        <LargeImage>
          <Heading></Heading>
          <Subheading>Position: Absolute Acı Burger</Subheading>
          <Link to="/siparis">
            <Buttoniki>SİPARİŞ VER</Buttoniki>
            </Link>
        </LargeImage>
        <SmallImagesContainer>
          <SmallImage>
            <Headingiki>Hackathlon</Headingiki>
            <Subheadingiki>Burger Menü</Subheadingiki>
            <Link to="/siparis">
            <Button>SİPARİŞ VER</Button>
            </Link>
          </SmallImage>
          <SmallImageiki>
            <Headinguc style={{ color: "red" }}>Çoooook </Headinguc>
            <Subheadinguc>hızlı </Subheadinguc>
            <Subheadingdrt>npm gibi kurye</Subheadingdrt>
            <Link to="/siparis">
            <Button>SİPARİŞ VER</Button>
            </Link>
          </SmallImageiki>
        </SmallImagesContainer>
      </ImageContainer>

      <CenterText>en çok paketlenen menüler</CenterText>
      <SubText>Acıktıran Kodlara Doyuran Lezzetler</SubText>
    </SectionContainer>
  );
};

export default Section;
