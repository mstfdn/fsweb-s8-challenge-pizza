import styled from 'styled-components';
import footImg from "../../Assets/Iteration-2-aseets/footer/icons/icon-1.png";
import footImg2 from "../../Assets/Iteration-2-aseets/footer/icons/icon-2.png";
import footImg3 from "../../Assets/Iteration-2-aseets/footer/icons/icon-3.png";

import instaImg from "../../Assets/Iteration-2-aseets/footer/insta/li-0.png";
import instaImg1 from "../../Assets/Iteration-2-aseets/footer/insta/li-1.png";
import instaImg2 from "../../Assets/Iteration-2-aseets/footer/insta/li-2.png";
import instaImg3 from "../../Assets/Iteration-2-aseets/footer/insta/li-3.png";
import instaImg4 from "../../Assets/Iteration-2-aseets/footer/insta/li-4.png";
import instaImg5 from "../../Assets/Iteration-2-aseets/footer/insta/li-5.png";

// Footer container
const FooterContainer = styled.footer`
  background-color: #000;
  color: white;
  padding: 20px 0;
  text-align: center;
`;

// Footer content with flex layout
const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Roboto Mono", sans-serif;
  font-weight: 900;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

// Footer column style
const FooterColumn = styled.div`
  flex: 1;
  padding: 10px;
  font-weight: bold; 
`;

// Footer title style with flex for logos and text alignment
const FooterTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold; 
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    display: flex;
    align-items: center;
    margin: 0;
  }
`;

// Footer link style
const FooterLink = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 10px;
  font-weight: normal;

  &:hover {
    text-decoration: underline;
  }
`;

// Image styling for logos
const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

// Instagram grid style for photos
const InstagramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 photos in each row */
  row-gap: 5px; /* Reduce the space between rows (vertical space) */
  margin-top: 10px;

  img {
    width: 60%;  /* Reduce the width */
    height: auto;  /* Maintain aspect ratio */
    object-fit: contain; /* Ensures images fit within their container */
    margin: 0 auto;  /* Center the images within the grid cells */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>
            Teknolojik Yemekler
          </FooterTitle>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <Logo src={footImg} alt="Logo 1" />
            <p>341 Londonderry Road, İstanbul Türkiye</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <Logo src={footImg2} alt="Logo 2" />
            <p>aciktim@teknolojik.com</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
          <Logo src={footImg3} alt="Logo 3" />
            <p>+90 216 123 45 67</p>
          </div>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Sıccacıkk Menüler</FooterTitle>
          <FooterLink href="#">Terminal Pizza</FooterLink>
          <FooterLink href="#">5 kişilik Hackathon Pizza</FooterLink>
          <FooterLink href="#">useEffect Tavuklu Pizza</FooterLink>
          <FooterLink href="#">Beyaz Console Frosty</FooterLink>
          <FooterLink href="#">Testler Geçti Mutlu Burger</FooterLink>
          <FooterLink href="#">Position Absolute Acı Burger</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Instagram</FooterTitle>
          <InstagramGrid>
            <img src={instaImg} alt="Instagram Photo 1" />
            <img src={instaImg1} alt="Instagram Photo 2" />
            <img src={instaImg2} alt="Instagram Photo 3" />
            <img src={instaImg3} alt="Instagram Photo 4" />
            <img src={instaImg4} alt="Instagram Photo 5" />
            <img src={instaImg5} alt="Instagram Photo 6" />
          </InstagramGrid>
        </FooterColumn>
      </FooterContent>
      <p>© 2023 Teknolojik Yemekler</p>
    </FooterContainer>
  );
};

export default Footer;