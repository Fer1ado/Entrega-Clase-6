import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ContextoCarrito } from './ContextoCarrito/ContextoCarrito';
import Carrito from './components/Carrito/Carrito';
import GenerarOrden from './components/Checkout/GenerarOrden';
import Footer from './components/Footer/Footer'



function App() {


  return (
    <div className="App">
      <ContextoCarrito>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="*" element={<ItemListContainer saludo="Listado de Productos Zima" />} />
            <Route path="/category/:IdCategoria" element={<ItemListContainer saludo="Productos Filtrados" />} />
            <Route path="/details/:IdProducto" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Carrito/>} />
            <Route path="/carrito/generarOrden" element={<GenerarOrden/>} />
          </Routes>
        <Footer/>
       
      </BrowserRouter>
      </ContextoCarrito>
      
    </div>
  );
}

export default App;
