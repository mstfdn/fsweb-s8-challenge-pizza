import React, { useEffect, useState } from "react";

const INGREDIENT_PRICE = 5;

function DynamicPriceDisplaySingleLine({
  quantity,
  ingredients,
  basePrice,
  size,
  onPriceChange,
}) {
  const [totalPrice, setTotalPrice] = useState(0); // Start at 0 for clarity

  const calculatePrice = () => {
    const ingredientCost = ingredients.length * INGREDIENT_PRICE * quantity;

    let newPizzaPrice;

    if (size === "small") {
      newPizzaPrice = basePrice * 0.8;
    } else if (size === "medium") {
      newPizzaPrice = basePrice * 1;
    } else if (size === "large") {
      newPizzaPrice = basePrice * 1.5;
    }

    const totalPrice = quantity * newPizzaPrice + ingredientCost;

    setTotalPrice(totalPrice);

    if (onPriceChange) {
      onPriceChange(totalPrice, ingredientCost);
    }
  };

  useEffect(() => {
    calculatePrice();
  }, [quantity, ingredients, size, basePrice]); // Ensure basePrice is included

  return (
    <p className="toplam-text">{totalPrice.toFixed(2)}₺</p> // Use toFixed for consistent format
  );
}

export default DynamicPriceDisplaySingleLine;