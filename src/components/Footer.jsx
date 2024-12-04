// src/components/Footer.jsx
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #000;
  color: white;
  padding: 20px 0;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  padding: 10px;
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>Teknolojik Yemekler</FooterTitle>
          <p>341 Londonderry Road, İstanbul Türkiye</p>
          <p>aciktim@teknolojik.com</p>
          <p>+90 216 123 45 67</p>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Sıcak Menü</FooterTitle>
          <FooterLink href="#">Terminal Pizza</FooterLink>
          <FooterLink href="#">Hackathon Pizza</FooterLink>
          <FooterLink href="#">useEffect Tavuklu Pizza</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Instagram</FooterTitle>
          <p>[Instagram Fotoğrafları]</p>
        </FooterColumn>
      </FooterContent>
      <p>© 2023 Teknolojik Yemekler</p>
    </FooterContainer>
  );
};

export default Footer;
