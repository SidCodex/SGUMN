import React from 'react';
import { NavLink } from 'react-router-dom';
const Card1 = (props) =>{
    return(
        <>
         <div className="col-md-4 col-0 mx-auto">
             <div className="card"> 
              <img src={props.imgsrc} className="card-img-top" alt="Image"/>
               <div className="card-body">
                 <h5 className="card-title">{props.title}</h5>
                 <p className="card-paragraph">{props.paragraph}</p>
                <NavLink to="/" className="btn-get-started card_btn">{props.button}</NavLink>
                </div>
              </div>
         </div>
        </> 
    );
};

export default Card1;