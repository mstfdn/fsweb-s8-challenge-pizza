import React from "react";
import "./IntroPage.css"

const MenuCards = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>Menü öğesi bulunamadı.</p>;
  }

  return (
    <div className="menu-cards">
      {items.map((item) => (
        <div key={item.id} className="menu-card">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <div className="menu-card-info">
            <p className="menu-card-rating">Puan: {item.rating}</p>
            <p className="menu-card-price">{item.price}₺</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCards;
