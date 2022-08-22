import {useState} from "react"

const CheckoutForm = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [direccion, setDireccion] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")



    return(
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
            <div className="btn purple" type="submit" title="Generar Orden" disabled> Generar Orden de Compra <i className="medium material-icons" > check</i></div> 
            :                
            <div className="btn purple" type="submit" title="Generar Orden"   > Generar Orden de Compra <i className="medium material-icons"  > check</i></div>
            }
        </div>
    </form>

    )
}

export default CheckoutForm