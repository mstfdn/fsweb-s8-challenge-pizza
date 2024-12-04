// src/components/SiparisOnayi.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  font-family: "Barlow", serif;
  background: red;
  color: white;
  padding: 20px;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  padding: 20px;
  position: relative;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;


const SuccessSubtext = styled.h3`
  font-size: 3rem;
  font-weight: lighter;
  text-transform: uppercase;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const OrderDetails = styled.div`
  text-align: left;
  margin: 30px 0;
  background: yellow;
  color: black;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const OrderDetailItem = styled.p`
  margin: 5px 0;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const TotalSection = styled.div`
  margin-top: 20px;
  background: yellow;
  color: black;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  text-align: right;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const TotalItem = styled.p`
  margin: 5px 0;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const MiniNote = styled.p`
  color: yellow;
  font-family: "Satisfy", cursive;
  font-weight: 400;
  font-style: normal;
`


const SiparisOnayi = () => {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const savedOrderDetails = localStorage.getItem('orderDetails');
    if (savedOrderDetails) {
      setOrderDetails(JSON.parse(savedOrderDetails));
    }
  }, []);

  return (
    <Container>
      <Header>Teknolojik Yemekler</Header>
      <MiniNote>Lezzetin Yolda</MiniNote>
      <SuccessSubtext>SİPARİŞ ALINDI</SuccessSubtext>
      {orderDetails && (
        <>
          <OrderDetails>
            <OrderDetailItem>Pizza: Position Absolute Acı Pizza</OrderDetailItem>
            <OrderDetailItem>Boyut: {orderDetails.size.charAt(0).toUpperCase() + orderDetails.size.slice(1)}</OrderDetailItem>
            <OrderDetailItem>Hamur: {orderDetails.dough.charAt(0).toUpperCase() + orderDetails.dough.slice(1)}</OrderDetailItem>
            <OrderDetailItem>Ek Malzemeler: {orderDetails.extras.join(', ')}</OrderDetailItem>
            <OrderDetailItem>Sipariş Notu: {orderDetails.note}</OrderDetailItem>
            <OrderDetailItem>Adet: {orderDetails.quantity}</OrderDetailItem>
            <OrderDetailItem><strong>Sipariş Veren:</strong> {orderDetails.name}</OrderDetailItem>
          </OrderDetails>
          <TotalSection>
            <TotalItem>Seçimler: {orderDetails.extras.length * 5}₺</TotalItem>
            <TotalItem>Toplam: {orderDetails.totalPrice}₺</TotalItem>
          </TotalSection>
        </>
      )}
    </Container>
  );
};

export default SiparisOnayi;
