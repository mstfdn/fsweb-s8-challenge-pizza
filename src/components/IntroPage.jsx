import React from "react";
import { Typography, Button } from "@mui/material";
import logo from "../../Assets/Iteration-1-assets/logo.svg";
import mainImg from "../../Assets/Iteration-2-aseets/cta/kart-1.png";
import mainImg2 from "../../Assets/Iteration-2-aseets/cta/kart-2.png";
import mainImg3 from "../../Assets/Iteration-2-aseets/cta/kart-3.png";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";


import MenuCards from "./MenuCards";
import MenuBar from "./MenuBar";
import { menuIcons, firstMenuLabels, secondMenuLabels, items } from "./MockDB";

function IntroPage() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/siparis-formu");
  };

  return (
    <>
      <section className="intro-page-banner-container">
        <div className="intro-page-hero">
          <img className="app-bar-logo" src={logo} alt="Pizza App Logo" />
          <div className="intro-page-hero-text-container">
            <h2 className="intro-page-hero-styled-text">fırsatı kaçırma</h2>
            <h1 className="intro-page-hero-heading">
              KOD ACIKTIRIR, <br /> PİZZA DOYURUR!
            </h1>
            <Button
              variant="contained"
              color="secondary"
              className="intro-page-hero-button"
              id="intro-page-hero-button"
              onClick={handleClick}
              aria-label="Order Now"
            >
              <Typography variant="h6">Acıktım</Typography>
            </Button>
          </div>
        </div>
      </section>
      <section className="intro-page-content-wrapper">
        <MenuBar
          icons={menuIcons}
          labels={firstMenuLabels}
          classProp="intro-page-menu-bar"
        />
        <div className="intro-page-cta-wrapper">
        <div
            className="intro-page-cta-left-column"
            style={{
              backgroundImage: `url(${mainImg})`, // Inline style ile background-image ekleniyor
            }}
          >
            <h2 className="cta-left-heading">
              Özel <br /> Lezzetus
            </h2>
            <p className="cta-left-subtitle">Position: Absolute Acı Burger</p>
            <Button
              variant="contained"
              color="secondary"
              id="cta-left-button"
              onClick={handleClick}
              aria-label="Order Special Lezzetus"
            >
              <span>Sipariş Ver</span>
            </Button>
          </div>
          <div className="intro-page-cta-right-column">
          <div
            className="cta-right-card-1"
            style={{
              backgroundImage: `url(${mainImg2})`, // Inline style ile background-image ekleniyor
            }}
          >
              <h2 className="cta-right-card-1-heading">
                Hackatlon <br /> Burger Menu
              </h2>
              <Button
                variant="contained"
                color="secondary"
                id="cta-right-button1"
                onClick={handleClick}
                aria-label="Order Hackatlon Burger Menu"
              >
                <span>Sipariş Ver</span>
              </Button>
            </div>
            <div
            className="cta-right-card-2"
            style={{
              backgroundImage: `url(${mainImg3})`, // Inline style ile background-image ekleniyor
            }}
          >
              <h2 className="cta-right-card-2-heading">
                <span style={{ color: "#ce2829" }}>Çooook </span> hızlı <br />{" "}
                Npm gibi kurye
              </h2>
              <Button
                variant="contained"
                color="secondary"
                id="cta-right-button2"
                onClick={handleClick}
                aria-label="Order Fast Delivery"
              >
                <span>Sipariş Ver</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="intro-page-img-menu-wrapper">
          <div className="intro-page-img-menu-heading-container">
            <p className="intro-page-img-menu-styled-heading">
              en çok paketlenen menüler
            </p>
            <h3 className="intro-page-img-menu-heading">
              Acıktıran Kodlara Doyuran Lezzetler
            </h3>
          </div>
          <MenuBar
            icons={menuIcons}
            labels={secondMenuLabels}
            classProp={"intro-page-img-menu-bar"}
          />
          <MenuCards items={items} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default IntroPage;