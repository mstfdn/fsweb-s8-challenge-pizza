import React from "react";
import "./QuantitySelector.css"; // Add this CSS file

const QuantitySelector = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className="quantity-selector">
      <button
        type="button"
        className="quantity-button decrement"
        onClick={onDecrement}
        aria-label="Decrease quantity"
        disabled={value <= 1} // Disable if the value is already 1
      >
        -
      </button>
      <span className="quantity-display" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        className="quantity-button increment"
        onClick={onIncrement}
        aria-label="Increase quantity"
        disabled={value >= 20} // Disable if the value is at the maximum limit
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;