import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, addToCart, removeItem } = useContext(CartContext);

  return (
    <>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <>
          <h2>No tienes productos en el carrito!</h2>
          <Link to={"/"}> Volver a comprar</Link>
        </>
      ) : (
        <>
          <div className="Cart">
            {cart.map((item) => (
              <div className="Cart_items" key={item.id}>
                <h2>{item.title}</h2>
                <h4>${item.precio} </h4>
                <img src={item.img} />
                <h3>{item.cantidad} </h3>
                <button onClick={() => removeItem(item.id)}>
                  Eliminar producto
                </button>
              </div>
            ))}
          </div>
          <h1>
            Total: $
            {cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)}{" "}
          </h1>
        </>
      )}
    </>
  );
};

export default Cart;
