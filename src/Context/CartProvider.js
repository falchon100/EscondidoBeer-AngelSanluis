import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //con esta funcion agrego productos a mi carrito
  const addCarrito = (item, cantidad, stock) => {
    const existe = cart.find((elemento) => elemento.id === item.id);
    if (existe) {
      if (existe.stock < cantidad) {
        alert(`Solo nos quedan en stock ${existe.stock}`);
      } else {
        existe.cantidad = existe.cantidad + cantidad;
        existe.stock = existe.stock - cantidad;
        setCart([...cart]);
      }
    } else {
      setCart([...cart, { ...item, cantidad, stock }]);
    }
  };

  //con esta funcion elimino un producto de mi carrito
  const removeItem = (productId) => {
    let nuevoArreglo = [];
    cart.forEach((product) => {
      if (product.id === productId) {
        console.log(product);
      } else {
        nuevoArreglo.push(product);
      }
    });
    setCart(nuevoArreglo);
  };

  return (
    <CartContext.Provider value={{ cart, addCarrito, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
