import './CartWidget.css'
import { useContext } from 'react'
import  Contexto from '../../ContextoCarrito/ContextoCarrito'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {calcularCantidad} = useContext(Contexto)

    const valor = calcularCantidad()

    return (
        <Link to="/carrito"><i className="material-icons">shopping_cart</i>{valor === 0 ? null : <h6 className="contador">{valor}</h6>}</Link>
    )
}

export default CartWidget