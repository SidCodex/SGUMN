import React from 'react';
import Pic1 from '../src/image/review/1.jpg';
import Pic2 from '../src/image/review/2.jpg';
import Pic3 from '../src/image/review/3.jpg';
const Partners = () => {
    return(
        <>
        <section id="partners" className="d-flex align-item-center my-5">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-10 mx-auto">
                     <div className="row">
                     <div className="col-lg-6 order-2 order-lg-1 partner-img d-flex justify-contetnt-center">
                            <img src={Pic1} className="img-fluid" alt="header-image" />
                            <img src={Pic1} className="img-fluid" alt="header-image" />
                            <img src={Pic1} className="img-fluid" alt="header-image" />
                        </div>
                        <div className="col-md-6 pt-5 pt-md-0 order-1 order-lg-2 d-flex  flex-column">
                        <p>"SHREE GAJANAN URBAN MUDRA NIDHI LTD is exciting because it shows how cheap it can be. SHREE GAJANAN URBAN MUDRA NIDHI LTD is better than currency in that you don’t have to be physically in the same place and, of course, for large transactions, currency can get pretty inconvenient.”</p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    );
};

export default Partners;