import React from 'react';
import process from "../src/image/process-icons/5.png";
import Card1 from './Card1';
import Rdata from './Rdata';
const Process = () => {
    return(
        <>
        <section id="process" className="my-5">
            <div className="col-10 mx-auto">
            <div className="my-3 process_head">
                <h1 className="text-center">Get Started With SHREE GAJANAN URBAN MUDRA NIDHI LTD</h1>
                <p>Start learning about SHREE GAJANAN URBAN MUDRA NIDHI LTD with interactive tutorials. It’s fun, easy, and takes only a few minutes for opening Deposit and Investment Account.!</p>
            </div>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                         <Card1
                         imgsrc={Rdata[0].imgsrc}
                         title={Rdata[0].title}
                         paragraph={Rdata[0].paragraph}
                         button={Rdata[0].button}
                         />
                         <Card1
                         imgsrc={Rdata[1].imgsrc}
                         title={Rdata[1].title}
                         paragraph={Rdata[1].paragraph}
                         button={Rdata[1].button}
                         />
                          <div className="col-md-4 col-0 mx-auto">
             <div className="card"> 
              <img src={process} className="card-img-top" alt="Image"/>
               <div className="card-body">
                 <h5 className="card-title">Start banking Process</h5>
                </div>
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

export default Process;