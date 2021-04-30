import React from 'react';
import { NavLink } from 'react-router-dom';

const CardUI = props =>{
    return(
        <>

            <div className="cards text-center shadow">
                <div className="overflow">
                    <img src={props.imgsrc} alt="image" className="card-img-top" />
                </div>
                <div className="card-bodys text-dark">
                    <h4 className="card-titles">{props.title}</h4>
                    <p className="card-texts text-secondary">{props.paragraph}</p>
                    <NavLink to="/" className="btn-get-started">{props.button}</NavLink>
                </div>
            </div>
        </>
    );
};

export default CardUI;