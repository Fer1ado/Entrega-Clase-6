import "./counter.css"
import { useState, useEffect} from 'react'


const Counter = ({stock, agregar, initial = 1}) => { //stock y onadd son props que llegan desde el componente padre
    const [count, setCount] = useState(initial)

    
    const increment = () => {
        if(count < stock)
        setCount(count + 1)
    }

    const decrement = () => {
        if(count > 1)
        setCount(count - 1)
    }
 

    return (
        <div className="cantidad">
            <a className="btn-flat-medium waves-effect waves-purple lighten-2" onClick={decrement}><i className="material-icons chevron">chevron_left</i></a>
            <h3 className="numero">{count}</h3>
            <a className="btn-flat-medium waves-effect waves-purple lighten-2" onClick={increment}><i className="material-icons chevron">chevron_right</i></a>
            <a className="btn-flat-medium  waves-effect waves-purple white " title="Agregar al Carrito" onClick={() => agregar(count)} ><i className="material-icons icono">add_shopping_cart</i></a>
        </div>
    )
}

export default Counter