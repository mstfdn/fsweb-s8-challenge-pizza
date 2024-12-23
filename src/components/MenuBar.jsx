import React from "react";

const MenuBar = ({ icons, labels, classProp }) => {
  return (
    <nav className={classProp} aria-label="Menu">
      {labels.map((label, index) => (
        <div className="intro-page-img-menu-item" key={index}>
          <img src={icons[index].src} alt={label.alt} />
          <span>{label.text}</span>
        </div>
      ))}
    </nav>
  );
};

export default MenuBar;