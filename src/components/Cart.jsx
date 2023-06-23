import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import trash from "./images/trash.svg";
import { Link } from "react-router-dom";


const Cart = () => {
    const {cart,removeItem,clear,totalPrecio,totalProductos} = useContext(CartContext)


    if (totalProductos() === 0) {
        return (
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Cart</h5>
                                <p className="card-text">No hay Productos disponibles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    else {
       return (
        <div className="container py-3">
            <h1 className="h4 mb-2">Productos</h1>
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <div className="row">
                        {cart.map((item) => (
                        <div className="col-12" key={item.id}>
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-3">
                                    <img src={item.imagen} alt={item.titulo} className="img-fluid rounded-start" />
                                    </div>
                                    <div className="col-9">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between">
                                            <h5 className="card-title mb-0">{item.titulo}</h5>
                                            <button className="btn" onClick={() => { removeItem(item.id) }}>
                                                <img src={trash} alt="eliminar producto" width={20} />
                                            </button>
                                            </div>
                                            <p className="card-text">{item.descripcion}</p>
                                            <p className="card-text">Cantidad: {item.quantity}</p>
                                            <h4 className="card-text">$ {item.quantity * item.precio}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Total</h5>
                            <p className="card-text">Cantidad de Productos: {totalProductos()}</p>
                            <h4 className="card-text">Total: $ {totalPrecio()}</h4>
                            <div className="d-flex justify-content-between">
                                <Link to="/checkout" className="btn btn-primary">Finalizar Compra</Link>
                                <button className="btn btn-danger" onClick={clear}>Vaciar Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       )
    }

}

export default Cart;