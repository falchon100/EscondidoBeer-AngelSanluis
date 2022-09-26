import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
  const { cart, addToCart, removeItem } = useContext(CartContext);

  return (
    <>
      <h1>Carrito de Compras</h1>
      <div className="Cart">
        {cart.map((item) => (
          <div className="Cart_items" key={item.id}>
            <h2>{item.title}</h2>
            <h4>${item.precio} </h4>
            <img src={item.img} />
            <h3>{item.cantidad} </h3>
            <button onClick={removeItem(item.id)}>Eliminar producto</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
