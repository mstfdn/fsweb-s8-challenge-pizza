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

const Divider = styled.div`
  width: 50%;
  border-bottom: 2px solid white;
  margin: 20px 0;
`;

const OrderTitle = styled.h2`
  text-align: center;
`;

const OrderDetails = styled.div`
  margin: 30px 0;
  background: transparent;
  color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  text-align: center;

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
  display: flex;
  justify-content: center;
  align-items: left;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const TotalSection = styled.div`
  margin-top: 20px;
  color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  text-align: right;
  width: 50%; 
  border: 1px solid white; /* Border genişliği 1 piksel */ 
  margin: 20px 0;


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
  display: flex;
  justify-content: space-around;
  font-weight: bold;

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
`;

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
      <Divider />
      {orderDetails && (
        <>
          <OrderDetails>
            <OrderTitle>Position Absolute Acı Pizza</OrderTitle>
            <OrderDetailItem>Boyut: {orderDetails.size.charAt(0).toUpperCase() + orderDetails.size.slice(1)}</OrderDetailItem>
            <OrderDetailItem>Hamur: {orderDetails.dough.charAt(0).toUpperCase() + orderDetails.dough.slice(1)}</OrderDetailItem>
            <OrderDetailItem>Ek Malzemeler: {orderDetails.extras.join(', ')}</OrderDetailItem>
            <OrderDetailItem>Sipariş Notu: {orderDetails.note}</OrderDetailItem>
            <OrderDetailItem>Adet: {orderDetails.quantity}</OrderDetailItem>
          </OrderDetails>
          <TotalSection>
            <TotalItem>Sipariş Toplamı</TotalItem>
            <TotalItem>Seçimler {orderDetails.extras.length * 5}₺</TotalItem>
            <TotalItem>Toplam {orderDetails.totalPrice}₺</TotalItem>
          </TotalSection>
        </>
      )}
    </Container>
  );
};

export default SiparisOnayi;
