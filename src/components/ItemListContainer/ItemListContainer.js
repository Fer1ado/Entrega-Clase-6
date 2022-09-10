import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList"
import { useParams} from "react-router-dom"
import Loading from "../Loading/Loading"
import {popProductos} from "../../Services/firebase/firestore"
import {useAsync} from "../../hooks/useAsync"

const ItemListContainer = ({saludo}) => {
    const { IdCategoria } = useParams()

        const buscarProductosFirestore = () => popProductos(IdCategoria)

        const { datos, error, cargando} = useAsync(buscarProductosFirestore, [IdCategoria])


    if(error){
        return (<h1>Algo salió mal...</h1>)
    }

    return (
        <>
    
        <h1>{saludo}</h1>
        {cargando === true ? 
                        <Loading texto="Cargando Productos..."/>
        :   <ItemList products={datos}/>
        } 
        </>
    )
}

export default ItemListContainer