import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../src/image/logo.png';
const Footer = () =>{
     return (
        <>
        <hr class="p-0 m-0 b-0"/>
         <div class="container-fluid flex-grow-1 ">
 </div>
 <footer class="bg-white">
     <div class="container py-5">
         <div class="row py-3">
             <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <img src={logo} alt="logo" className="img-fluid"/>
             </div>
             <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 class="text-uppercase font-weight-bold mb-4">About</h6>
                 <ul class="list-unstyled mb-0">
                     <li class="mb-2"><NavLink to='/' class="text-muted">Contact Us</NavLink></li>
                     <li class="mb-2"><NavLink to='/' class="text-muted">About Us</NavLink></li>
                     <li class="mb-2"><NavLink to='/' class="text-muted">News</NavLink></li>
                     
                 </ul>
             </div>
             <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 class="text-uppercase font-weight-bold mb-4">Resources</h6>
                 <ul class="list-unstyled mb-0">
                     <li class="mb-2"><NavLink to='/' class="text-muted">How to apply loan</NavLink></li>
                     <li class="mb-2"><NavLink to='/' class="text-muted">Investment Overview</NavLink></li>
                     <li class="mb-2"><NavLink to='/' class="text-muted">How to Invest</NavLink></li>
                     <li class="mb-2"><NavLink to='/' class="text-muted">Recurring Deposit Info</NavLink></li>
                 </ul>
             </div>
            
             <div class="col-lg-4 col-md-6 mb-lg-0">
                 <h6 class="text-uppercase font-weight-bold mb-4">Registered Office Address</h6>
                 <p class="text-muted mb-4">Here , write the complete address of the Registered office address along with telephone number.</p>
                 <ul class="list-inline mt-4">
                     <li class="list-inline-item"><NavLink to='/' target="_blank" title="twitter"><i class="fa fa-2x fa-twitter"></i></NavLink></li>
                     <li class="list-inline-item"><NavLink to='/' target="_blank" title="facebook"><i class="fa fa-2x fa-facebook-f"></i></NavLink></li>
                     <li class="list-inline-item"><NavLink to='/' target="_blank" title="instagram"><i class="fa fa-2x fa-instagram"></i></NavLink></li>
                     <li class="list-inline-item"><NavLink to='/' target="_blank" title="pinterest"><i class="fa fa-2x fa-youtube"></i></NavLink></li>
                     <li class="list-inline-item"><NavLink to='/' target="_blank" title="vimeo"><i class="fa fa-2x fa-google"></i></NavLink></li>
                 </ul>
             </div>
         </div>
     </div>
     <hr class="p-0 m-0 b-0"/>
     <div class="bg-light py-2">
         <div class="container text-center">
             <p class="text-muted mb-0 py-2">© 2021 All rights reserved | Presented by : CodeLover Technology</p>
         </div>
     </div>
 </footer>
        </>
     );
};

export default Footer;