import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({
  title,
  precio,
  img,
  id,
  category,
  stars,
  alcohol,
  description,
}) => {
  return (
    <div className="cart card shadow">
      <h3>{title} </h3>
      <Link className="contenedor_img" to={`/item/${id}`}>
        <img width={"200px"} src={img} alt={title} />
      </Link>
      <p>{alcohol} </p>
      <p className="description">{description}</p>
      <p className="stars">{stars} </p>
      <h5>${precio} </h5>
      <div className={category}>🍻</div>
    </div>
  );
};

export default Item;
