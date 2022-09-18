import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ lista }) => {
  const [goToCart, setGoToCart] = useState(true);

  const agregar = (cantidad) => {
    /*   alert(`Agregaste ${cantidad} productos al carrito`); */
    setGoToCart(false);
  };
  console.log(lista);
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
