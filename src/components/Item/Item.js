import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const Item = ({ title, precio, img, stock, id }) => {
  const agregar = (cantidad) => {
    alert(`Agregaste ${cantidad} productos al carrito`);
  };
  return (
    <div>
      <Link to={`/item/${id}`}>
        <img width={"200px"} src={img} alt={title} />
      </Link>
      <h2>{title} </h2>
      <h3>${precio} </h3>
      <ItemCount initial={1} stock={stock} onAdd={agregar} />
    </div>
  );
};

export default Item;
