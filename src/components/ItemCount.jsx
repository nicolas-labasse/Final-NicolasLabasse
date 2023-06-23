import React, {useState} from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';

const ItemCount = ({stock,onAdd}) => {
    const [count, setCount] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    const sumar = () => {
        if (count < itemStock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const agregarCarrito = () => {
        if ( count <= itemStock) {
            setItemStock(itemStock - count)
            setCount(1)
            setItemAdded(true)
            onAdd(count)
        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock])


    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={restar}>-</button>
                        <button type="button" className="btn btn-primary" >{count}</button>
                        <button type="button" className="btn btn-primary" onClick={sumar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    {itemAdded ? <Link to={"/cart"} className="btn btn-primary">Finalizar Compra</Link>: <button type="button" className="btn btn-primary" onClick={agregarCarrito}>Agregar al carrito</button>}
                    
                </div>
            </div>
        </div>
    )
}

export default ItemCount;