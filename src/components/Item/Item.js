const Item = ({ title, precio, img }) => {
  return (
    <div>
      <img width={"200px"} src={img} alt={title} />
      <h2>{title} </h2>
      <h3>${precio} </h3>
    </div>
  );
};

export default Item;
