import "../style/navbar.css"

export function Navbar(){
    return (
    <nav className="nav container-fluid">
        <a className="nav_a_contenedor"> <img className="nav_img" src={require("../image/1.jpg") } alt="" /> </a>
     <ul className="nav_ul" >
        <li className="nav_li">Productos</li>
        <li className="nav_li">Contacto</li>
        <li className="nav_li">Pedido Online</li>
     </ul>
    <i class="fa-solid fa-bars nav_hamb"></i>
    </nav>)}