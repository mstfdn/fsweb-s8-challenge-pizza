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
  background-color: ${(props) => (props.active ? "#fbc02d" : "white")};
  color: ${(props) => (props.active ? "white" : "#333")};
  border: ${(props) => (props.active ? "none" : "1px solid #ccc")};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.active ? "#f9a825" : "#f0f0f0")};
  }
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
  width: 250px;
`;

const ProductImage = styled.div`
  background-image: url("../Assets/Iteration-2-aseets/pictures/food-1.png");
  background-size: cover;
  background-position: center;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ProductImageiki = styled.div`
  background-image: url("../Assets/Iteration-2-aseets/pictures/food-2.png");
  background-size: cover;
  background-position: center;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ProductImageuc = styled.div`
  background-image: url("../Assets/Iteration-2-aseets/pictures/food-3.png");
  background-size: cover;
  background-position: center;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
`;

const ProductRating = styled.div`
  font-size: 14px;
  margin: 5px 0;
`;

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #f44336;
`;

const ProductSection = () => {
  return (
    <ProductContainer>
      <Navbar>
        <NavItem>Ramen</NavItem>
        <NavItem active>Pizza</NavItem>
        <NavItem>Burger</NavItem>
        <NavItem>French fries</NavItem>
        <NavItem>Fast food</NavItem>
        <NavItem>Soft drinks</NavItem>
      </Navbar>

      <Products>
        <ProductCard>
          <ProductImage />
          <ProductTitle>Terminal Pizza</ProductTitle>
          <ProductRating>4.9 ⭐ (200)</ProductRating>
          <ProductPrice>60₺</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImageiki />
          <ProductTitle>Position Absolute Acı Pizza</ProductTitle>
          <ProductRating>4.9 ⭐ (828)</ProductRating>
          <ProductPrice>85₺</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImageuc />
          <ProductTitle>useEffect Tavuklu Burger</ProductTitle>
          <ProductRating>4.9 ⭐ (462)</ProductRating>
          <ProductPrice>75₺</ProductPrice>
        </ProductCard>
      </Products>
    </ProductContainer>
  );
};

export default ProductSection;
