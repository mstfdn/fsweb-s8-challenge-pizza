import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../../Assets/Iteration-1-assets/logo.svg";
import "./Success.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Success() {
  const location = useLocation();
  const { orderDetails } = location.state || {};

  // apidata to Turkish

  let size;

  if (orderDetails.size === "small") {
    size = "Küçük";
  } else if (orderDetails.size === "medium") {
    size = "Orta";
  } else if (orderDetails.size === "large") {
    size = "Büyük";
  }

  let crust;

  if (orderDetails.crust === "thin") {
    crust = "İnce";
  } else {
    crust = "Normal";
  }

  return (
    <>
      <main className="success-page">
        <section className="success-page-logo-container">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="logo"
              style={{ height: "2.5rem" }}
            />
          </Link>
        </section>
        <section className="success-order-confirmed-container">
          <p className="success-styled-text">lezzetin yolda</p>
          <p className="success-confirmation-text">SİPARİŞ ALINDI</p>
          <hr className="success-hr" />
        </section>
        <section className="success-order-details-container">
          <h3 className="success-pizza-name">Position Absolute Acı Pizza</h3>
          <div className="success-order-details-display">
            <p>
              Boyut: <span style={{ fontWeight: "bold" }}>{size}</span>
            </p>
            <p>
              Hamur: <span style={{ fontWeight: "bold" }}>{crust}</span>
            </p>
            <p>
              Ek Malzemeler:{" "}
              <span style={{ fontWeight: "bold" }}>
                {orderDetails.ingredients.length > 0
                  ? orderDetails.ingredients.join(", ")
                  : "Yok"}
              </span>
            </p>
          </div>
        </section>
        <section className="success-order-price-details">
          <h3 className="success-order-price-details-header">
            Sipariş Toplamı
          </h3>
          <div className="success-order-price-details-display">
            <div className="secimler">
              <p>Ek Malzemeler</p>
              <p>{orderDetails.extrasPrice}₺</p>
            </div>
            <div className="toplam">
              <p>Toplam</p>
              <p>{orderDetails.totalPrice}₺</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Success;