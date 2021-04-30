import React from 'react';
import Ceo from "../src/image/AshokShrivashtav1.jpeg";
const Team = () =>{
    return(
        <>
        <section id="Team">
            <div className="col-10 mx-auto  my-5 Team_head">
                <h1 className="text-center">Meet Our Team</h1>
                <p className="text-center">Our experts in the field of banking, can always help you with any of your questions!</p>
            </div>
            <div className="col-10 mx-auto ceo">
                <h3 className="text-center">CEO & MD Messages</h3>
            </div>
            <div className="container-fluid">   
                <div className="row">
                    <div className="col-10 mx-auto">
                     <div className="row">
                     <div className="col-lg-6 order-2 order-lg-1 about-img overflow">
                            <img src={Ceo} className="img-fluid ceo_img" alt="header-image" />
                        </div>
                        <div className="col-md-6 pt-5 pt-md-0 order-1 order-lg-2 d-flex flex-column Team_para">
                            <h1>Mr. Ashok Kumar Srivastav</h1>
                            <p className="my-3 about_paragraph1" >CEO & MD</p>
                            <p className="my-1 text-center about_paragraph2">The search for leadership talent at all managerial levels, especially the top, has become more intense today than ever before. This emerging scenario, which has become highly competitive in most sectors, has thrown up new challenges and opportunities for our stakeholders.</p>
                            <p className="my-1 text-center about_paragraph2">Organizations are striving to achieve success, or at the very least, to have healthy growth rates in their sales turnover and profitability. These organizations are competing to attract the best talent by offering higher compensations, increased role flexibility, and better working environments. But organizational growth goals must be achieved and exceeded through the leaders they bring on board. As a result, the performance expectations of leaders and managers have never been more substantial and complex.</p>
                            <p className="my-1 text-center about_paragraph2">At the same time, the modern leader and manager have now become a knowledge worker and a global executive with a wider range of skills. One might assume that this new breed of leaders and managers has found it easier to find a professional niche and thereby professional success. Paradoxically, however, he or she has found it increasingly difficult to find the ideal firm where one can be a perfect fit, functionally and culturally.</p>
                            <p className="my-1 text-center about_paragraph2">As India continues to scale to its potential, in a fast transforming globalized world, SHREE GAJANAN URBAN MUDRA NIDHI LTD NIDHI LIMITED is helping make that journey a reality, by providing the drivers of this growth to India’s leading companies and its up-and-coming leaders. We invite you to avail of the service that SHREE GAJANAN URBAN MUDRA NIDHI LTD NIDHI LIMITED offers in the way that it benefits you.</p>
                        
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Team;