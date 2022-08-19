import "./carrito.css"
import {Link} from "react-router-dom"
import { useContext, useEfect} from "react"
import  Contexto from '../../ContextoCarrito/ContextoCarrito'


const Carrito = () => {
      
    const {carro, totalCarrito, agregarItem, agregarDecarrito, quitarDecarrito, vaciarCarro, quitarItem } = useContext(Contexto)

    return(
        <>
        {carro.length === 0 ?   <div><h1>Tu carrito esta vacío</h1>
                                <br></br>
                                <Link to="/" ><h4>Click para empezar a Comprar!</h4></Link>
                                </div> 
                            :
            <div className="carroPadre">
                <h2>listado de Productos Seleccionados</h2>
                    {carro.map(prod => 
                                <div className="itemCarrito" key={prod.id}>
                                    <h4 className="tituloItem">{prod.name}</h4>
                                    <img className="imagenCarrito" src={prod.imagen} ></img>
                                    <h5 className="subtotal">Subtotal: $ {prod.precio * prod.cantidad} </h5>
                                    <h5> {prod.cantidad} Un</h5>
                                        <div className="agregarRestar">
                                            <i onClick={() => agregarDecarrito(prod.id)} className=" material-icons botoncarro" title="Agregar">keyboard_arrow_up</i>
                                            <i onClick={() => quitarDecarrito(prod.id)}className=" material-icons botoncarro" title="Restar">keyboard_arrow_down</i>
                                        </div>
                                    <span><i onClick={() => quitarItem(prod.id)} className=" material-icons botoncarro" title="Quitar Producto" > remove_circle </i></span>
                                </div>
                    )}

                <h3 className="totalCarrito">Total carrito: $ {totalCarrito()} </h3>
                <div className="btn vaciarCarro purple" title="Vaciar Carrito" onClick={() => vaciarCarro()}> Vaciar Carrito <i className="medium material-icons" > remove_shopping_cart</i></div>
            </div>
        }
        </>
    )
}

export default Carrito