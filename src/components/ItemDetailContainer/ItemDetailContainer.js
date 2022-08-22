import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams} from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { BaDat } from "../../Services/firebase/firebaseindex"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(true)
    const {IdProducto} = useParams()


    useEffect(() => {
        setLoading(true)

    getDoc(doc(BaDat, "Zima-Catalogo", IdProducto)).then(response => {
      
        const data = response.data()
        const ajusteProductos = { id: response.id, ...data}
        setProducto(ajusteProductos)
        })
    .catch(error=>{
        console.log(error)
    })
    .finally(()=>setLoading(false))


},[IdProducto])




return (
    
    <div>
        <ItemDetail name={producto?.nombre} 
        imagen={producto?.imagen} 
        descripcion={producto?.descripcion} 
        stock={producto?.stock}
        id={producto?.id} precio={producto?.importe}/>
        
    </div>
    )
}

export default ItemDetailContainer