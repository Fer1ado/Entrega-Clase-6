import './App.css';

import Navbar from './components/Navbar/Navbar';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ContextoCarrito } from './ContextoCarrito/ContextoCarrito';
import Carrito from './components/Carrito/Carrito';


function App() {


  return (
    <div className="App">
      <ContextoCarrito>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Listado de Productos Zima" />} />
            <Route path="/category/:IdCategoria" element={<ItemListContainer greeting="Productos Filtrados" />} />
            <Route path="/details/:IdProducto" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Carrito/>} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            
          </Routes>
      </BrowserRouter>
      </ContextoCarrito>
      
    </div>
  );
}

export default App;
