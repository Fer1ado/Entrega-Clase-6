

const Formulario = (props) => {

       
    const {onChange} = props;

    return (
        <>
        <div className="row formulario">
        <div className="input-field col s6">
            <i className="material-icons prefix">account_circle</i>
            <input id="icon_name" type="text" className="validate" name="nombre" onChange={onChange} ></input>
            <label htmlFor="icon_name">Nombre</label>
            <span className="helper-text" data-error="ingrese su Nombre" data-success="Ok">ingresar Nombre</span>
        </div>
        <div className="input-field col s6">
        <i className="material-icons prefix">account_circle</i>
            <input id="icon_surname" type="text" className="validate" name="apellido" onChange={onChange} ></input>
            <label htmlFor="icon_surname">Apellido</label>
            <span className="helper-text" data-error="ingrese su Apellido" data-success="Ok">ingresar Apellido</span>
        </div>
        <div className="input-field col s12">
            <i className="material-icons prefix">directions</i>
            <input id="icon_adress" type="text" className="validate" name="direccion" onChange={onChange} ></input>
            <label htmlFor="icon_adress">Dirección</label>
            <span className="helper-text" data-error="No es una direccion válida" data-success="Ok">ingresar direccion</span>
        </div>
        <div className="input-field col s6">
            <i className="material-icons prefix">mail_outline</i>
            <input id="icon_mail" type="Email" className="validate" name="email" onChange={onChange} ></input>
            <label htmlFor="icon_mail">E-mail</label>
            <span className="helper-text" data-error="No es una direccion válida" data-success="Ok">ingresar E-mail</span>
        </div>
        <div className="input-field col s6">
            <i className="material-icons prefix">phone</i>
            <input id="icon_telephone" type="number" className="validate" name="telefono" onChange={onChange} required></input>
            <label htmlFor="icon_telephone">Telefono</label>
            <span className="helper-text" data-error="ingresar telefono válido" data-success="Ok">ingresar telefono</span>
        </div>
        </div>
        </>
    )
}

export default Formulario

