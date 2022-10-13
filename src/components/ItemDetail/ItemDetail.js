import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({ lista }) => {
  //Creo un estado Booleano para poder renderizar condicionalmente al 1regar un producto
  const [goToCart, setGoToCart] = useState(true);

  const { addCarrito } = useContext(CartContext);

  const agregar = (cantidad) => {
    setGoToCart(false);
    addCarrito(lista, cantidad, lista.stock - cantidad);
  };
  return (
    <>
      <div className=" card carta mx-auto shadow mt-5 mb-5">
        <h1>Producto Destacado:</h1>
        <h2>{lista.title} </h2>
        <p className="stars">{lista.stars} </p>
        <h3>$ {lista.precio} </h3>
        <div className="contenedor_img">
          <img width="200px" alt={lista.title} src={lista.img} />
        </div>
        {goToCart ? (
          <ItemCount initial={1} stock={lista.stock} onAdd={agregar} />
        ) : (
          <>
            <Link className="btn btn-violet mt-2 mb-2" to={"/cart"}>
              Terminar Compra
            </Link>
            <Link className="btn btn-violet mt-2 mb-2" to={"/"}>
              {" "}
              Volver{" "}
            </Link>{" "}
          </>
        )}
      </div>
    </>
  );
};
export default ItemDetail;
