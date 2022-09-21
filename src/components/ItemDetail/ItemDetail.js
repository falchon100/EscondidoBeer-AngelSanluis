import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({ lista }) => {
  //Creo un estado Booleano para poder renderizar condicionalmente al agregar un producto
  const [goToCart, setGoToCart] = useState(true);

  const { addCarrito } = useContext(CartContext);

  const agregar = (cantidad) => {
    setGoToCart(false);
    addCarrito(lista, cantidad, lista.stock - cantidad);
  };
  return (
    <>
      <div className="itemDetallado">
        <h1>Producto Destacado:</h1>
        <h2>{lista.title} </h2>
        <h3>$ {lista.precio} </h3>
        <img width="200px" alt={lista.title} src={lista.img} />
        {goToCart ? (
          <ItemCount initial={1} stock={lista.stock} onAdd={agregar} />
        ) : (
          <>
            <Link to={"/cart"}>Finalizar Compra</Link>
            <Link to={"/"}> Volver </Link>{" "}
          </>
        )}
      </div>
    </>
  );
};
export default ItemDetail;
