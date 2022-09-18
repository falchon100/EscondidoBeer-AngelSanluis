import { Link } from "react-router-dom";

const Item = ({ title, precio, img, id }) => {
  return (
    <div>
      <Link to={`/item/${id}`}>
        <img width={"200px"} src={img} alt={title} />
      </Link>
      <h2>{title} </h2>
      <h3>${precio} </h3>
    </div>
  );
};

export default Item;
