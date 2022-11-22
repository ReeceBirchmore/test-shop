import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Cart from "./Views/Cart";
import Header from "./Components/Header";
import ProductPage from "./Views/ProductPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isLoggedIn, setUserLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [header, setHeader] = useState("Home");

  return (
    <div className="App">
      <Header pageHeader={header} />

      <Routes>
        <Route
          path="/product/:id"
          element={
            <ProductPage
              id={4}
              setHeader={setHeader}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setHeader={setHeader} />}
        />
      </Routes>
    </div>
  );
}

export default App;
