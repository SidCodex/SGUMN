import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../src/image/logo.png';
const Navbar = () =>{
    return(
        <>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
  <NavLink className="navbar-brand" to="/"><img src={logo} alt="Logo" /></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto w-100 justify-content-end">
    <li className="nav-item">
          <NavLink activeClassName='menu_active' exact className="nav-link" to='/about' >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' exact className="nav-link " aria-current="page" to='/product'>Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' exact className="nav-link" to='/resource'>Resource</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' exact className="nav-link" to='/news'>News</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink activeClassName='menu_active' exact className="nav-link" to='/contact' >Contact</NavLink>
        </li>
    </ul>
  </div>
  </div>
</nav>
</header>
        </>
    );
};

export default Navbar;