import "./item.css"
import {Link} from "react-router-dom"


const Item = ({prod}) =>{
    
  
  
    return (
    
    <>
    <div className="card z-depth-4">
      <div className="card-image">
        <img src={prod?.imagen} alt={prod?.imagen}/>
        <span className="card-title"></span>
        <Link to={`/details/${prod.id}`} className="btn-floating halfway-fab waves-effect waves-light purple" title="Ver detalle del producto"><i className="material-icons">add</i></Link>
      </div>
      
      <div className="card-content">
        <h5> {prod.nombre.toUpperCase()}</h5>
      </div>
    </div>
    </>    
        )
}

export default Item