import React, { useState, useContext, useEffect } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "./context/CartContext"

const ItemDetail = ({producto}) => {
    const {addItem} = useContext(CartContext)
    const [item, setItem] = useState({})

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    useEffect(() => {
        setItem(producto)
    }, [producto])

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-3">
                    <img src={producto.imagen} alt={producto.titulo} className="img-fluid" />
                </div>
                <div className="col-3">
                    <h2>{producto.titulo}</h2>
                    <h3>$ {producto.precio}</h3>
                    <p>{producto.descripcion}</p>
                    <ItemCount stock={producto.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail