import "./ItemDetail.css";

const ItemDetail = ({ lista }) => {
  console.log(lista);
  return (
    <>
      <div className="itemDetallado">
        <h1>Producto Destacado:</h1>
        <h2>{lista.title} </h2>
        <h3>$ {lista.precio} </h3>
        <img width="200px" alt={lista.title} src={lista.img} />
      </div>
    </>
  );
};
export default ItemDetail;
