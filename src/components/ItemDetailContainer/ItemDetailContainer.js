import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams} from "react-router-dom"
import {popProducto} from "../../Services/firebase/firestore"
import { useAsync } from "../../hooks/useAsync"
import Loading from "../Loading/Loading"

const ItemDetailContainer = () => {
    const {IdProducto} = useParams()
    
    const buscarProductoFirestore = () => popProducto(IdProducto)

    const { datos, error, cargando} = useAsync(buscarProductoFirestore, [IdProducto])

    if(error){
        return (<h1>Algo salió mal...</h1>)
    }


return (
    <>
    {cargando === true ? 
        <Loading texto="Cargando Detalle ..."/> :
    <div>
        <ItemDetail name={datos.nombre} 
        imagen={datos.imagen} 
        descripcion={datos.descripcion} 
        stock={datos.stock}
        id={datos.id} precio={datos.importe}/>
        
    </div>
    }
    </>
    )
}

export default ItemDetailContainer