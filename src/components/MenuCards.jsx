import React from "react";

const MenuBar = ({ icons = [], labels = [], classProp }) => {
  if (!Array.isArray(labels) || !Array.isArray(icons)) {
    console.error('icons ve labels dizileri geçerli bir dizi olmalı');
    return null;
  }

  return (
    <nav className={classProp} aria-label="Menu">
      {labels.length > 0 && labels.map((label, index) => (
        <div className="intro-page-img-menu-item" key={index}>
          <img src={icons[index]?.src} alt={label.alt || "Menu item"} />
          <span>{label.text}</span>
        </div>
      ))}
    </nav>
  );
};

export default MenuBar;
