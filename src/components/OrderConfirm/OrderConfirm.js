import {Link} from "react-router-dom"

const Confirm = ({direccion, ordenconfirm, email, telefono }) =>{


    return (
        <>
        <div className="alineado">
        <div className="row ">
            <div className="col s7 m12">
                <div className="card  purple accent-4 darken-1 aviso">
                        <div className="card-content white-text">
                            <span className="card-title titu">Tu compra se proceso Exitosamente! </span>
                            <div class="divider"></div>
                            <p></p>
                            <span className="card-title">el ID de tu operación es:</span>
                            <h4>{ordenconfirm}</h4>
                            <div class="divider"></div>
                            <p></p>
                            <span className="card-title">Se envió un correo a:</span>
                            <h5>{email}</h5> <p> con los detalles de la operacion</p>
                            <p>Direccion: {direccion}</p>
                            <p>Telefono: {telefono} </p>
                            </div>
                            <div class="divider"></div>

                            <div className="card-action seguir">
                            <Link to="/"> <h5>Seguir Comprando</h5></Link>
                        </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Confirm