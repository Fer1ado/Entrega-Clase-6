
import './Navbar.css'
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"

const Navbar = () => {

    return (
  
    <nav className="purple darken-2 z-depth-5 ">
        <div className="nav-wrapper alineacion">
         <Link to='/' className=""><img src="https://firebasestorage.googleapis.com/v0/b/zima-ceramica-a2caa.appspot.com/o/logo2.svg?alt=media&token=30bfd68f-ba9e-4d07-8a39-2c71af479af5"/></Link>
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