import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from "../ItemList/ItemList"
import { useParams} from "react-router-dom"
import { getDocs, collection, query,  where} from "firebase/firestore"
import { BaDat } from "../../Services/firebase/firebaseindex"
import Loading from "../Loading/Loading"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { IdCategoria } = useParams()
    
    useEffect(()=>{
        setLoading(true)
        const coleccionCompleta = !IdCategoria 
        ? collection(BaDat, "Zima-Catalogo")
        : query(collection(BaDat, "Zima-Catalogo"), where("categoria", "==", IdCategoria))

        getDocs(coleccionCompleta)
        .then(response => {
            const ajusteProductos = response.docs.map(doc => {
            const data = doc.data()
            return {id: doc.id, ...data}
        })
        setProducts(ajusteProductos)
    }).catch(error => console.log(error)).finally(() => {setLoading(false)})
    
    },[IdCategoria])



    return (
        <>
    
        <h1>{greeting}</h1>
        {loading === true ? 
                        <Loading/>
        :   <ItemList products={products}/>
        } 
        </>
    )
}

export default ItemListContainer