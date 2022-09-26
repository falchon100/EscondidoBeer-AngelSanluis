import React from "react";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import "./Cartwidge.css";

const Cartwidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      {/*  <i className="fa-solid fa-cart-shopping">{cart.length}</i> */}
      <i className="fa-solid fa-cart-shopping">
        {` ` + cart.reduce((acc, prod) => acc + prod.cantidad, 0)}
      </i>
    </div>
  );
};

export default Cartwidget;
