import {useState, createContext} from 'react'

const Contexto = createContext()

export const ContextoCarrito = ({children}) => {
    const [carro, setCarro] = useState([])


    const agregarItem = (productoAgregar) => {
        if(!hayEnCarrito(productoAgregar.id)){
            setCarro([...carro, productoAgregar])
        } else {
            const carroNuevo = carro.map(prod => {
                if(prod.id === productoAgregar.id){
                    const productoNuevo = {
                    ...prod, 
                    cantidad: productoAgregar.cantidad}
                    return productoNuevo
                } else {
                    return prod
                }
            })
            setCarro(carroNuevo)
        }
    }

    const agregarDecarrito = (nuevoId) =>{
        carro.map(prod => {
            if(prod.id === nuevoId){
                const productoNuevo = {
                ...prod, 
                cantidad: prod.cantidad +1 }
                agregarItem(productoNuevo)
            }
        })
    }

    const quitarDecarrito = (nuevoId) =>{
        carro.map(prod => {
            if(prod.id === nuevoId){
                const productoNuevo = {
                ...prod, 
                cantidad: prod.cantidad -1 }
                if(prod.cantidad <= 1){
                    quitarItem(nuevoId)} 
                else{ 
                    agregarItem(productoNuevo)}
            }
        })
    }

    const calcularCantidad = () => {
        let acc = 0
        carro.forEach(prod => {
        acc += prod.cantidad
        })

        return acc
    }

    const totalCarrito = () =>{
        let cantidad = 0
        let precio = 0

        carro.forEach(prod => {
            cantidad += prod.cantidad
            precio += prod.precio
            })
        return (precio * cantidad)
    }
   
  

    const quitarItem = (id) => {
        const nuevoCarro = carro.filter(prod => prod.id !== id)
        setCarro(nuevoCarro)
    }

    const hayEnCarrito = (id) => {
    return  carro.some(prod => prod.id === id)
    }

    const vaciarCarro = () => {
        setCarro([])
        }


    const buscarCantidadProd = (id) => {
        const item = carro.find(prod => prod.id === id)
        return item?.cantidad
    }


//console.log(carro)


    return(
        <Contexto.Provider value={{carro, agregarItem, agregarDecarrito, quitarDecarrito, totalCarrito, calcularCantidad, hayEnCarrito, vaciarCarro, quitarItem, buscarCantidadProd }}>
            {children}
        </Contexto.Provider>
    )

}

export default Contexto