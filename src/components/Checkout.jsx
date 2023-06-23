import React, { useState, useContext } from 'react'
import { CartContext } from './context/CartContext'
import { getFirestore, doc, collection,addDoc, updateDoc,getDoc } from "firebase/firestore"
import { Navigate } from 'react-router-dom'

const Checkout = () => {
const { cart, totalPrecio,clear } = useContext(CartContext)
const [nombre, setNombre] = useState('')
const [email, setEmail] = useState('')
const [telefono, setTelefono] = useState('')
const [ordenId, setOrdenId] = useState('')

const finalizarCompra = () => {
    const buyer = { 
        nombre: nombre,
        email: email,
        telefono: telefono
    }

    const productos = cart.map(item => ({id: item.id, titulo: item.titulo, precio: item.precio, cantidad: item.quantity}))
    const fecha = new Date()
    const date = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear() + ' ' + fecha.getHours() + ':' + fecha.getMinutes();
    const total = totalPrecio()

    const orden = { buyer: buyer, items: productos, date: date, total: total }

    if (nombre.length === 0 || email.length === 0 || telefono.length === 0) {
        alert('Por favor complete todos los campos')
    }
    else {
        const db = getFirestore()
        const compras = collection(db,'compras')
        addDoc(compras, orden).then(resultado => {
            setOrdenId(resultado.id)
            clear()
        }).catch(err => {
            console.log("Error al completar la compra")
        })

    }

    const db = getFirestore();

    productos.forEach(async (producto) => {
        const docRef = doc(db, 'productos', producto.id);
        const docSnap = await getDoc(docRef);
        const stock = docSnap.data().stock;
        const stockNuevo = stock - producto.cantidad 
        updateDoc(docRef, { stock: stockNuevo });
    })
}

return (
<div className="container">
    <div className="row jusfy-content-center">
        <div className="col-4 offset-2">
            <div className="row my-5">
                <div className="col-6 p-0 pe-1">
                    <input type="text" className="form-control" placeholder="Nombre" aria-label="Nombre" onInput={
                        (e) => {setNombre(e.target.value)}}/>
                </div>
                <div className="col-6 p-0 ps-1">
                    <input type="text" className="form-control" placeholder="Email" aria-label="Email" onInput={
                        (e) => {setEmail(e.target.value)}}/>
                </div>
                <input type="text" className="form-control mt-2" placeholder="Telefono" aria-label="Telefono" onInput={
                        (e) => {setTelefono(e.target.value)}}/>

                <button className='btn btn-primary mt-3' onClick={finalizarCompra}>Generar Orden</button>
            </div>
        </div>
        <div className="col-6 my-5">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Productos
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne">
                    <div className="accordion-body">
                        <table className="table">
                        <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.imagen} alt={item.titulo} width={80} /></td>
                                        <td>{item.titulo}</td>
                                        <td>{item.quantity}</td>
                                        <td>$ {item.quantity * item.precio}</td>
                                    </tr>
                                ))}
                            <tr>
                                <td colSpan={3} className="text-end fw-bold">Suma Total</td>
                                <td colSpan={3}>$ {totalPrecio()}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        { ordenId ? <Navigate to={`/agradecimiento/${ordenId}`} /> : null}
    </div>
</div>
)
}

export default Checkout