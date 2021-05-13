import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../src/image/logo.png';
const Footer = () =>{
     return (
        <>
 <footer className="bg-white mt-5">
 <hr className="p-0 m-0 b-0 mt-5"/>
     <div className="container py-3">
         <div className="row py-3">
             <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <img src={logo} alt="logo" className="img-fluid"/>
             </div>
             <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 className="text-uppercase font-weight-bold mb-4">About</h6>
                 <ul className="list-unstyled mb-0">
                     <li className="mb-2"><NavLink to='/' className="text-muted">Contact Us</NavLink></li>
                     <li className="mb-2"><NavLink to='/' className="text-muted">About Us</NavLink></li>
                     <li className="mb-2"><NavLink to='/' className="text-muted">News</NavLink></li>
                     
                 </ul>
             </div>
             <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 className="text-uppercase font-weight-bold mb-4">Resources</h6>
                 <ul className="list-unstyled mb-0">
                     <li className="mb-2"><NavLink to='/' className="text-muted">How to apply loan</NavLink></li>
                     <li className="mb-2"><NavLink to='/' className="text-muted">Investment Overview</NavLink></li>
                     <li className="mb-2"><NavLink to='/' className="text-muted">How to Invest</NavLink></li>
                     <li className="mb-2"><NavLink to='/' className="text-muted">Recurring Deposit Info</NavLink></li>
                 </ul>
             </div>
            
             <div className="col-lg-4 col-md-6 mb-lg-0">
                 <h6 className="text-uppercase font-weight-bold mb-4">Registered Office Address</h6>
                 <p className="text-muted mb-4">Here , write the complete address of the Registered office address along with telephone number.</p>
                 <ul className="list-inline mt-4">
                     <li className="list-inline-item"><NavLink to='/' target="_blank" title="twitter"><i className="fa fa-2x fa-twitter"></i></NavLink></li>
                     <li className="list-inline-item"><NavLink to='/' target="_blank" title="facebook"><i className="fa fa-2x fa-facebook-f"></i></NavLink></li>
                     <li className="list-inline-item"><NavLink to='/' target="_blank" title="instagram"><i className="fa fa-2x fa-instagram"></i></NavLink></li>
                     <li className="list-inline-item"><NavLink to='/' target="_blank" title="pinterest"><i className="fa fa-2x fa-youtube"></i></NavLink></li>
                     <li className="list-inline-item"><NavLink to='/' target="_blank" title="vimeo"><i className="fa fa-2x fa-google"></i></NavLink></li>
                 </ul>
             </div>
         </div>
     </div>
     <hr className="p-0 m-0 b-0"/>
     <div className="bg-light py-2">
         <div className="container text-center">
             <p className="text-muted mb-0 py-2">© 2021 All rights reserved | Presented by : CodeLover Technology</p>
         </div>
     </div>
 </footer>
        </>
     );
};

export default Footer;
