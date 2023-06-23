import { NavLink }  from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
    <div className="collapse navbar-collapse justify-content-center" >
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link " activeclassname="fw-bold"  aria-current="page" to={"/"}>Home</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link " activeclassname="fw-bold" aria-current="page" to={"/category/buzos"}>Buzos</NavLink>
            </li>
            
            <li className="nav-item">
                <NavLink className="nav-link " activeclassname="fw-bold" aria-current="page" to={"/category/remeras"}>Remeras</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link " activeclassname="fw-bold" aria-current="page" to={"/category/sportwear"}>Deportiva</NavLink>
            </li>

            <li className="nav-item">  
               <CartWidget />
            </li>
            
        </ul>
    </div>
);
}

export default NavBar;