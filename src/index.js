import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Home from "./components/Home/Home";
import "./assets/fonts/newbaskerville/NewBaskervilleITCbyBT-Roman.otf";
import CartPage from "./components/CartPage/CartPage";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import ProcessPayment from "./components/ProcessPayment/ProcessPayment";
import ScrollToTop from "./utils/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="product-details">
              <Route path=":bookID" element={<ProductDetails />} />
            </Route>
            <Route path="cart-page" element={<CartPage />} />
            <Route path="checkout-page" element={<CheckoutPage />} />
            <Route path="process-payment" element={<ProcessPayment />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
