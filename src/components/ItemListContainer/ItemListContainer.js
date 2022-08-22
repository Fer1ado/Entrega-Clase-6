import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from "../ItemList/ItemList"
import { useParams} from "react-router-dom"
import { getDocs, collection, query,  where} from "firebase/firestore"
import { BaDat } from "../../Services/firebase/firebaseindex"

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
                        <div>
                            <div className="preloader-wrapper big active">
                                <div className="spinner-layer spinner-purple">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div><div className="gap-patch">
                                    <div className="circle"></div>
                                </div><div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                                </div>
                            </div> 
                            <h2>Cargando...</h2>
                        </div>
        :   <ItemList products={products}/>
        } 
        </>
    )
}

export default ItemListContainer