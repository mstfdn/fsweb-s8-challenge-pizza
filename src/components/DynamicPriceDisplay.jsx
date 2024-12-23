import React, { useEffect, useState } from "react";

const INGREDIENT_PRICE = 5;

function DynamicPriceDisplay({
  quantity,
  ingredients,
  basePrice,
  size,
  onPriceChange,
}) {
  const [totalPrice, setTotalPrice] = useState(basePrice);
  const [extrasPrice, setExtrasPrice] = useState(0);

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

    const totalPrice = quantity * newPizzaPrice + quantity * ingredientCost;

    setTotalPrice(totalPrice);
    setExtrasPrice(ingredientCost);

    if (onPriceChange) {
      onPriceChange(totalPrice, ingredientCost);
    }
  };

  useEffect(() => {
    calculatePrice();
  }, [quantity, ingredients, size]);

  return (
    <>
      <h3 className="form-heading" style={{ textAlign: "left" }}>
        Sipariş Toplamı
      </h3>
      <div className="secimler-container">
        <p className="secimler-text">Seçimler</p>
        <p className="secimler-text">{extrasPrice}₺</p>
      </div>
      <div className="toplam-container">
        <p className="toplam-text">Toplam</p>
        <p className="toplam-text">{totalPrice}₺</p>
      </div>
    </>
  );
}

export default DynamicPriceDisplay;