import React from 'react';
import { NavLink } from 'react-router-dom';
import about from "../src/image/about-img.png";
const Homeabout = () => {
    return(
        <>
            <section id="about" className="d-flex align-item-center">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-10 mx-auto">
                     <div className="row">
                     <div className="col-lg-6 order-2 order-lg-1 about-img">
                            <img src={about} className="img-fluid" alt="header-image" />
                        </div>
                        <div className="col-md-6 pt-5 pt-md-0 order-1 order-lg-2 d-flex flex-column ">
                            <h1 className="about_headline1" >SHREE GAJANAN URBAN MUDRA NIDHI LTD</h1>
                            <h2 className="about_headline2" >SHREE GAJANAN URBAN MUDRA NIDHI LTD is an innovative Nidhi Ltd and a new kind of investment.</h2>
                            <p className="my-3 about_paragraph"><strong>SHREE GAJANAN URBAN MUDRA NIDHI LTD</strong> is members of the most important inventions in all of Investment history. For the first time ever, anyone can invest or receive any good benefit with us else, anywhere on the India, conveniently and without restriction. It’s the dawn of a better, more free finincial world.</p>
                            <div className="mt-3 d-flex justify-content-center">
                            <NavLink to="/" className="btn-get-started btn1" >
                                    Get Started
                            </NavLink>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Homeabout;