import AppBar from "./AppBar";
import React from "react";
import OrderForm from "./OrderForm";
import Footer from "./Footer";

function OrderPage() {
  return (
    <>
      <AppBar />
      <div className="order-page-wrapper">
        <OrderForm />
      </div>
      <Footer />
    </>
  );
}

export default OrderPage;