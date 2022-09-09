import {useContext, useState } from "react"
import {Link} from "react-router-dom"
import Contexto from "../../ContextoCarrito/ContextoCarrito"
import "./GenerarOrden.css"
import { BaDat } from "../../Services/firebase/firebaseindex"
import {addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch} from "firebase/firestore"
import Loading from "../Loading/Loading"
import Confirm from "../OrderConfirm/OrderConfirm"


const GenerarOrden = () => {
    const [ordenconfirm, setOrdenconfirm] = useState ("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [direccion, setDireccion] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    const { carro, calcularCantidad, totalCarrito, vaciarCarro} = useContext(Contexto)

    const cantidadTotal = calcularCantidad()
    const total = totalCarrito()

    
    const crearOrden = async () =>{
       setLoading(true)
                
        const infOrden = {
            cliente : {
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                direccion: direccion,
                email: email,
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
        
            <Confirm direccion={direccion} ordenconfirm={ordenconfirm} email={email} telefono={telefono}/>
        
        :     
        
        <form className="col s12">
            <div className="row formulario">
                <div className="input-field col s6">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="icon_name" type="text" className="validate" value={nombre} onChange={(e)=>setNombre(e.target.value)} ></input>
                    <label htmlFor="icon_name">Nombre</label>
                    <span className="helper-text" data-error="ingrese su Nombre" data-success="Ok">ingresar Nombre</span>
                </div>
                <div className="input-field col s6">
                    <input id="icon_surname" type="text" className="validate" value={apellido} onChange={(e)=>setApellido(e.target.value)} ></input>
                    <label htmlFor="icon_surname">Apellido</label>
                    <span className="helper-text" data-error="ingrese su Apellido" data-success="Ok">ingresar Apellido</span>
                </div>
                <div className="input-field col s12">
                    <i className="material-icons prefix">directions</i>
                    <input id="icon_adress" type="text" className="validate" value={direccion} onChange={(e)=>setDireccion(e.target.value)} ></input>
                    <label htmlFor="icon_adress">Dirección</label>
                    <span className="helper-text" data-error="No es una direccion válida" data-success="Ok">ingresar direccion</span>
                </div>
                <div className="input-field col s6">
                    <i className="material-icons prefix">mail_outline</i>
                    <input id="icon_mail" type="Email" className="validate"value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
                    <label htmlFor="icon_mail">E-mail</label>
                    <span className="helper-text" data-error="No es una direccion válida" data-success="Ok">ingresar E-mail</span>
                </div>
                <div className="input-field col s6">
                    <i className="material-icons prefix">phone</i>
                    <input id="icon_telephone" type="number" className="validate" value={telefono} onChange={(e)=>setTelefono(e.target.value)} required></input>
                    <label htmlFor="icon_telephone">Telefono</label>
                    <span className="helper-text" data-error="ingresar telefono válido" data-success="Ok">ingresar telefono</span>
                </div>
                {telefono === "" ?  
                <div className="btn purple compra" type="submit" title="Generar Orden" disabled> Generar Orden de Compra <i className="Large material-icons tilde" > local_shipping </i></div> 
                :                
                <div className="btn purple compra" type="submit" title="Generar Orden" onClick={() => crearOrden()} > Generar Orden de Compra <i className="Large material-icons tilde"> local_shipping </i></div>
                }
            </div>
        </form>
        }
        
          
        </>
    
    )


}
}
export default GenerarOrden