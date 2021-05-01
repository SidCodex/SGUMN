import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../src/image/logo.png';
const Navbar = () =>{
    return(
        <>
<div className="container-fluid nav_bg ">
 <div className="row">
    <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/' ><img src={logo} alt="logo" className="img-fluid" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 ">
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;