import {useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import ShoppingCartContext from "./assets/data/ShoppingCartContext";
import Footer from "./components/Footer/Footer";


function App() {
  const block = "app";
  let [cartContext, setCartContext] = useState([]);

  return (
    <ShoppingCartContext.Provider value={[cartContext, setCartContext]}>
      <div className={`${block}__root`}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ShoppingCartContext.Provider>
  );
}

export default App;
