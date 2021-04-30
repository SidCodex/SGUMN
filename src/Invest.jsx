import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/image/laptop1.png";
const Invest = () => {
    return(
        <>
            <section id="header" className="d-flex align-item-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-md-0 order-2 order-lg-1 d-flex flex-column ">
                            <h1 className="nav_headline" ><strong className="strong_invest">invest in</strong> shree gajanan urban mudra nidhi limited   </h1>
                            <p className="my-3 header_paragraph">Use modern progressive technologies of <strong className="strong_paragraph">SHREE GAJANAN URBAN MUDRA NIDHI LTD </strong>to earn money</p>
                            <div className="mt-3 d-flex justify-content-center">
                            <NavLink to="/" className="btn-get-started" >
                                    Get Started
                            </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={web} className="img-fluid animated" alt="header-image" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Invest;