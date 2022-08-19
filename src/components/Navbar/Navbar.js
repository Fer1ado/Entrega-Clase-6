
import './Navbar.css'
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"

const Navbar = () => {

    return (
  
    <nav className="purple darken-2 z-depth-5 ">
        <div className="nav-wrapper alineacion">
         <Link to='/' className=""><img src="../../images/logo2.svg"/></Link>
          <ul className="right hide-on-small-and-down alinearlinks">
            <Link to='/category/platos' >Platos </Link>
            <Link to='/category/cuencos'>Cuencos </Link>
            <Link to='/category/tazas' >Tazas </Link>
            <Link to='/category/varios' >Varios </Link>
            <a><i className="material-icons">search</i></a>
            <CartWidget />
           </ul>
        </div>
    </nav>
   
   )
}

export default Navbar