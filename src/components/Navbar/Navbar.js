import "../../style/navbar/navbar.css";
import "../../components/Cartwidget/Cartwidget.js";
import Cartwidget from "../../components/Cartwidget/Cartwidget.js";
import Hamb from "../Hamb/Hamb";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="nav container-fluid">
      <Link to={"/"} className="nav_a_contenedor">
        <img className="nav_img" src={require("../../image/1.jpg")} alt="" />
      </Link>
      <ul className="nav_ul">
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
        <Cartwidget />
      </ul>
      <Hamb />
    </nav>
  );
}
