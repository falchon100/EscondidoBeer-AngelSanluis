import "./Cart.css";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import moment from "moment";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const { cart, addCarrito, removeItem, clearCarrito } =
    useContext(CartContext);
  const [values, setValues] = useState({ name: "", email: "" });
  const [actualizar, setActualizar] = useState(false);

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  };

  const eliminarTodo = () => {
    clearCarrito();
    !actualizar ? setActualizar(true) : setActualizar(false);
  };

  const createOrder = () => {
    const db = getFirestore();
    const order = {
      buyer: {
        name: `${values.name}`,
        phone: ` 4933243`,
        email: `${values.email}`,
      },
      items: cart,
      total: "3000",
      date: moment().format(),
    };
    const query = collection(db, `Order`);
    addDoc(query, order)
      .then(({ id }) => {
        toast.success(
          `Felicidades ${values.name}!
      El ID de tu compra es ${id}`,
          {
            position: "top-center",
          }
        );
      })
      .catch(() => alert(`no pudo completarse`));
  };
  const buy = (event) => {
    event.preventDefault();
    if (!values.name || !values.email) {
      toast.error("Debe completar todos los campos");
    } else {
      createOrder();
      eliminarTodo();
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <>
          <h2>No tienes productos en el carrito!</h2>
          <Link className="btn btn-violet mt-5 mb-5" to={"/"}>
            {" "}
            Volver a comprar
          </Link>
        </>
      ) : (
        <>
          <div className="Cart">
            {cart.map((item) => (
              <div className="Cart_items" key={item.id}>
                <h2>{item.title}</h2>
                <h4>${item.precio} </h4>
                <img src={item.img} />
                <h3>Cantidades :{item.cantidad} </h3>
                <button
                  className="btn btn-violet"
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar producto
                </button>
              </div>
            ))}
          </div>
          <h1>
            Total: $
            {cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)}{" "}
          </h1>
          <Link to={"/"}>
            <button className="btn btn-violet">Volver</button>{" "}
          </Link>
          <hr class="my-4"></hr>
          <form
            className="form form-group mx-auto shadow mb-5 mt-5 container"
            onSubmit={buy}
          >
            <h2>Completa los datos para generar la orden</h2>
            <label htmlFor="name">Nombre</label>
            <input
              className="form-control"
              id="name"
              name="name"
              type="name"
              value={values.name}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            <button className="btn btn-violet mt-2 mb-2" type="submit">
              Crear Orden
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default Cart;
