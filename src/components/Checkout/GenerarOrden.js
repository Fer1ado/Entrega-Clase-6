import {useContext, useState, useEffect} from "react"
import Contexto from "../../ContextoCarrito/ContextoCarrito"
import "./GenerarOrden.css"
import { BaDat } from "../../Services/firebase/firebaseindex"
import {addDoc, collection, getDocs, query, where, documentId, writeBatch} from "firebase/firestore"
import Loading from "../Loading/Loading"
import Confirm from "../OrderConfirm/OrderConfirm"
import Formulario from "../Formulario/Formulario"



const GenerarOrden = () => {
    const [ordenconfirm, setOrdenconfirm] = useState ("")
    const [loading, setLoading] = useState(false)
    const [datosUsuario, setDatosUsuario] = useState({
        nombre:"",
        apellido:"",
        direccion:"",
        telefono:"",
        email:"",
    })

    const { carro, calcularCantidad, totalCarrito, vaciarCarro} = useContext(Contexto)

    const cantidadTotal = calcularCantidad()
    const total = totalCarrito()

    const onChange = (e) =>{
        setDatosUsuario({...datosUsuario, [e.target.name]: e.target.value })
    }
    
    const crearOrden = async () =>{
       setLoading(true)
                
        const infOrden = {
            cliente : {
                nombre: datosUsuario.nombre,
                apellido: datosUsuario.apellido,
                telefono: datosUsuario.telefono,
                direccion: datosUsuario.direccion,
                email: datosUsuario.email,
            },
            items: carro,
            cantidadTotal,
            total,
            date: new Date()
        }
        
        const ids = carro.map(prod=>prod.id)
               const catalogoRef = collection(BaDat,"Zima-Catalogo")

        const primerResponse = await getDocs(query(catalogoRef, where(documentId(), "in", ids)))
        const { docs } = primerResponse
        

        const prodSinStock = []
        const batch = writeBatch(BaDat)

        docs.forEach(item =>{
            const datoStock = item.data()
            const stockBaDat = datoStock.stock

            const prodEnCarrito =  carro.find(prod => prod.id === item.id)
            const cantidadProducto = prodEnCarrito?.cantidad

            if(stockBaDat >= cantidadProducto){
                batch.update(item.ref, {stock: stockBaDat - cantidadProducto})

            }else{
                prodSinStock.push({id: item.id, ...datoStock})
            }
        })

        const chequeostock = prodSinStock.length



        if( chequeostock !== 0){
            console.log("hay productos sin stock")

        } else {
            await batch.commit()

            const referenciaOrden = collection(BaDat, "Ordenes-Compra")
            const ordenAgregada =  await addDoc(referenciaOrden, infOrden)
            
        
        const finalizar = setOrdenconfirm(ordenAgregada.id)

        vaciarCarro()
        
        }

    setLoading(false)

    }

    if(loading){
        return (
            <Loading texto="Generando Orden..."/>
        )
    } else{

    return (
        
        <>
        
        <h1>Checkout</h1>

        {ordenconfirm !== "" ? 
        
        <Confirm direccion={datosUsuario.direccion} ordenconfirm={ordenconfirm} email={datosUsuario.email} telefono={datosUsuario.telefono}/>
        
        :     
        
        <form className="col s12">
            <Formulario onChange={onChange} />
                {datosUsuario.telefono === "" ?  
                <div className="btn purple compra" type="submit" title="Generar Orden" disabled> Generar Orden de Compra <i className="Large material-icons tilde" > local_shipping </i></div> 
                :                
                <div className="btn purple compra" type="submit" title="Generar Orden" onClick={() => crearOrden()} > Generar Orden de Compra <i className="Large material-icons tilde"> local_shipping </i></div>
                }
        </form>
        }
        
          
        </>
    
    )

}
}
export default GenerarOrden

