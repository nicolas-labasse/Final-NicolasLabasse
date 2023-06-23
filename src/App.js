import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider  from './components/context/CartContext';
import Checkout from './components/Checkout';
import Agradecimiento from './components/Agradecimiento';

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />}/>
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/agradecimiento/:ordenId" element={<Agradecimiento />} />
                <Route path="/*" element={<h1>404 - Not Found</h1>} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
