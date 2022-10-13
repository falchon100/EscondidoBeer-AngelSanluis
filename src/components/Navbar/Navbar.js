import "./navbar.css";
import "../../components/Cartwidget/Cartwidget.js";
import Cartwidget from "../../components/Cartwidget/Cartwidget.js";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useContext, useState } from "react";

export function Navbar() {
  const [handlenav, setHandlenav] = useState(true);
  const aparecer = () => {
    setHandlenav(!handlenav);
    console.log(handlenav);
  };

  const { cart } = useContext(CartContext);
  return (
    <nav className="nav container-fluid">
      <Link to={"/"} className="nav_a_contenedor">
        <img className="nav_img" src={require("../../image/1.jpg")} alt="" />
      </Link>
      <ul className={handlenav ? `nav_ul` : `nav_ul d-none`}>
        <li className="nav_li">
          <Link to={"/category/ipa"} className="nav-li">
            Ipa
          </Link>
        </li>
        <li className="nav_li">
          <Link to={"/category/roja"} className="nav-li">
            Roja
          </Link>
        </li>
        <li className="nav_li">
          <Link to={"/category/rubia"} className="nav-li">
            Rubia
          </Link>
        </li>

        {cart.length !== 0 && (
          <Link to={`/cart`}>
            <Cartwidget />
          </Link>
        )}
      </ul>
      <i onClick={aparecer} className="fa-solid fa-bars nav_hamb"></i>
    </nav>
  );
}
