import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import toast, { Toaster } from "react-hot-toast";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //con esta funcion |o productos a mi carrito
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
      toast.success(`se agrego ${cantidad} ${item.title}`);
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

  const clearCarrito = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addCarrito, removeItem, clearCarrito }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
