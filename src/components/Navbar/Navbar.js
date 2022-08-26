import "../../style/navbar/navbar.css"
import "../../components/Cartwidget/Cartwidget.js"
import Cartwidget from "../../components/Cartwidget/Cartwidget.js"
import Hamb from "../Hamb/Hamb"
export function Navbar(){
    return (
    <nav className="nav container-fluid">
        <a href="/" className="nav_a_contenedor"> <img className="nav_img" src={require("../../image/1.jpg") } alt="" /> </a>
     <ul className="nav_ul" >
        <li className="nav_li"><a href="/" className="nav_a">Productos</a></li>
        <li className="nav_li"><a href="/" className="nav_a">Contacto</a></li>
        <li className="nav_li"><a href="/" className="nav_a" >Pedido Online</a></li>
        <Cartwidget />
     </ul>
      <Hamb/>
    </nav>)}

    