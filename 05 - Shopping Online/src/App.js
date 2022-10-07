import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (number, what, price) => {
    const Item = {
      id: 2,
      name: what,
      quant: number,
      price: price,
    };

    const newRecord = [{ Item }, ...cart];
    setCart(newRecord);
  };

  const handleDeleteFromCart = (id) => {
    const x = cart.filter((item, index) => index !== id);
    setCart(x);
  };
  return (
    <div className="App">
      <Header cartList={cart} handleDeleteFromCart={handleDeleteFromCart} />
      <Product handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
