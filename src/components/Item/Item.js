import { ItemCount } from "../ItemCount/ItemCount";

const Item = ({ title, precio, img, stock }) => {
  const agregar = (cantidad) => {
    alert(`Agregaste ${cantidad} productos al carrito`);
  };
  return (
    <div>
      <img width={"200px"} src={img} alt={title} />
      <h2>{title} </h2>
      <h3>${precio} </h3>
      <ItemCount initial={1} stock={stock} onAdd={agregar} />
    </div>
  );
};

export default Item;
