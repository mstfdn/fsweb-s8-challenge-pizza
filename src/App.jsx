import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import OrderPage from "./components/OrderPage.jsx";
import IntroPage from "./components/IntroPage.jsx";
import Success from "./components/Success.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={IntroPage} />
        <Route exact path="/siparis-formu" component={OrderPage} />
        <Route path="/success" component={Success} />
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;