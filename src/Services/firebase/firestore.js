import { getDocs, collection, query,  where} from "firebase/firestore"
import { BaDat } from "./firebaseindex"
import { getDoc, doc } from "firebase/firestore"

export const popProductos = (IdCategoria) => {

    const coleccionCompleta = !IdCategoria 
        ? collection(BaDat, "Zima-Catalogo")
        : query(collection(BaDat, "Zima-Catalogo"), where("categoria", "==", IdCategoria))

        return getDocs(coleccionCompleta)
        .then(response => {
            const ajusteProductos = response.docs.map(doc => {
            const data = doc.data()
            return {id: doc.id, ...data}
        })
           return ajusteProductos
        }).catch(error => {
            return error
        })
}

export const popProducto = (IdProducto) => {
    return getDoc(doc(BaDat, "Zima-Catalogo", IdProducto)).then(response => {
      
                const data = response.data()
                const ajusteProductos = { id: response.id, ...data}
                return ajusteProductos
                })

            .catch(error=>{
                return error
            })
}