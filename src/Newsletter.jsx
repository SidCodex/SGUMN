import React from 'react';
import {NavLink} from 'react-router-dom';
const Newsletter = () => {

    return(
        <>
          <section id="newsletter" className="d-flex align-item-center my-5">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6  mt-5 order-2 order-lg-1 d-flex flex-column ">
                            <h1 className="news_headline text-white-50" > Subscribe to our Newsletter </h1>
                            <p className="my-3 news_paragraph text-white">Sign up for our weekly industry updates, insider perspectives and in-depth market analysis.</p>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <div className="my-3 mt-5 d-flex justify-content-center">
                            <input type="email" placeholder="Enter your email" className="form-control input-email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <NavLink to="/" className="btn-get-started newsBtn" >
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

export default Newsletter;