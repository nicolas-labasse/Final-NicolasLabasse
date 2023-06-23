import carro from '../components/images/carrito-de-compras.png';
import {Link} from 'react-router-dom';
import { CartContext } from './context/CartContext';
import React, {useContext} from 'react';



const CartWidget = () => {
    const {totalProductos} = useContext(CartContext)

    return (      
        (totalProductos() > 0) ?  
        <Link to={"/cart"} className="nav-link fw-bold position-relative me-5">
            <img src={carro} alt="" width="30" height="24" ></img>
            <span className="badge bg-danger position-absolute top-0 end-0" >{totalProductos()}</span>
        </Link>
        :
        ""

    );
}

export default CartWidget;