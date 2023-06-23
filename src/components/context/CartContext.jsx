import { createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {

        if (isInCart(item.id)) {
            let producto = cart.findIndex(prod => prod.id === item.id);
            cart[producto].quantity += quantity;
            setCart([...cart]);
        }
        else {
            setCart([...cart, {...item, quantity: quantity }]);
        }

    };

    const removeItem = (itemId) => {
        const items = cart.filter((item) => item.id !== itemId);
        setCart([...items]);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const totalProductos = () => {
        return cart.reduce((acc, item) => acc += item.quantity, 0);
    };

    const totalPrecio = () => {
        return cart.reduce((acc, item) => acc += item.quantity * item.precio, 0);
    };

    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, isInCart, cart, totalProductos, totalPrecio }}>
            {children}
        </CartContext.Provider>
    )


}

export default CartContextProvider;