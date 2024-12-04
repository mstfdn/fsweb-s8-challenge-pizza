// src/components/ProductSection.jsx
import React from "react";
import styled from "styled-components";

const ProductContainer = styled.section`
  padding: 20px 40px;
  background-color: #fff;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const NavItem = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${(props) => (props.active ? "#000000" : "white")};
  color: ${(props) => (props.active ? "white" : "#333")};
  border: ${(props) => (props.active ? "none" : "1px solid #ccc")};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${(props) => (props.active ? "#f9a825" : "#f0f0f0")};
  }
`;

const NavIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

const Products = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const ProductCard = styled.div`
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 350px;
  
`;

const ProductImage = styled.div`
  background-image: url("../Assets/Iteration-2-aseets/pictures/food-1.png");
  background-size: cover;
  background-position: center;
  height: 350px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ProductImageiki = styled.div`
  background-image: url("../Assets/Iteration-2-aseets/pictures/food-2.png");
  background-size: cover;
  background-position: center;
  height: 350px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ProductImageuc = styled.div`
  background-image: url("../Assets/Iteration-2-aseets/pictures/food-3.png");
  background-size: cover;
  background-position: center;
  height: 350px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column; /* Dikey olarak sıralama */
  justify-content: flex-start; /* Öğeleri yukarıya hizalar */
  align-items: center; /* Ortalar */
  margin-top: 10px;
  gap: 10px; /* Aralarındaki boşluğu ayarlamak için */
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: normal;
  margin: 0;
  white-space: nowrap; /* Tek satırda tutar */
  flex: 2; /* Diğer elemanlara göre daha fazla yer kaplamasını sağlar */
`;

const ProductRating = styled.div`
  font-size: 14px;
  text-align: center; /* Ortalar */
  white-space: nowrap;
`;

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: black;
  text-align: center; /* Ortalar */
`;




const ProductSection = () => {
  return (
    <ProductContainer>
      <Navbar>
        <NavItem>
          <NavIcon src="../Assets/Iteration-2-aseets/icons/1.svg" />
          Ramen
        </NavItem>
        <NavItem active>
          <NavIcon src="../Assets/Iteration-2-aseets/icons/2.svg" />
          Pizza
        </NavItem>
        <NavItem>
          <NavIcon src="../Assets/Iteration-2-aseets/icons/3.svg" />
          Burger
        </NavItem>
        <NavItem>
          <NavIcon src="../Assets/Iteration-2-aseets/icons/4.svg" />
          French fries
        </NavItem>
        <NavItem>
          <NavIcon src="../Assets/Iteration-2-aseets/icons/5.svg" />
          Fast food
        </NavItem>
        <NavItem>
          <NavIcon src="../Assets/Iteration-2-aseets/icons/6.svg" />
          Soft drinks
        </NavItem>
      </Navbar>

      <Products>
      <ProductCard>
  <ProductImage />
  <ProductDetails>
    <ProductTitle>Terminal Pizza</ProductTitle>
    <ProductRating>4.9 ⭐ (200)</ProductRating>
    <ProductPrice>60₺</ProductPrice>
  </ProductDetails>
</ProductCard>
<ProductCard>
  <ProductImageiki />
  <ProductDetails>
    <ProductTitle>Position Absolute Acı Pizza</ProductTitle>
    <ProductRating>4.9 ⭐ (828)</ProductRating>
    <ProductPrice>85₺</ProductPrice>
  </ProductDetails>
</ProductCard>
<ProductCard>
  <ProductImageuc />
  <ProductDetails>
    <ProductTitle>useEffect Tavuklu Burger</ProductTitle>
    <ProductRating>4.9 ⭐ (462)</ProductRating>
    <ProductPrice>75₺</ProductPrice>
  </ProductDetails>
</ProductCard>


      </Products>
    </ProductContainer>
  );
};

export default ProductSection;
