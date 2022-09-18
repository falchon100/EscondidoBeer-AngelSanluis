import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";

const ItemDetail = ({ lista }) => {
  const agregar = (cantidad) => {
    alert(`Agregaste ${cantidad} productos al carrito`);
  };
  console.log(lista);
  return (
    <>
      <div className="itemDetallado">
        <h1>Producto Destacado:</h1>
        <h2>{lista.title} </h2>
        <h3>$ {lista.precio} </h3>
        <img width="200px" alt={lista.title} src={lista.img} />
        <ItemCount initial={1} stock={lista.stock} onAdd={agregar} />
      </div>
    </>
  );
};
export default ItemDetail;
