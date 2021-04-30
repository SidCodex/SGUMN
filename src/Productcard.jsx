import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
const Productcard = () => {

    return (
        <>
        <section id="card_id">
                <div className="my-5">
                    <h1 className="text-center">Our Features & Products</h1>
                </div>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                            {
                                Sdata.map((val, ind)=>{
                                    return <Card key= {ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                        paragraph={val.paragraph}
                                        button={val.button}
                                    />
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        </>
    );
};

export default Productcard;