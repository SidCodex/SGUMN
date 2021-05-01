import React from 'react';
import Pic1 from '../src/image/review/1.jpg';
import Pic2 from '../src/image/review/2.jpg';
import Pic3 from '../src/image/review/3.jpg';
const Partners = () => {
    return(
        <>
        <div className="testimonials-clean my-5">
        <div className="container">
            <div className="intro">
                <h2 className="text-center">Testimonials </h2>
                <p className="text-center">Our customers love us! Read what they have to say below. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
            </div>
            <div className="row people">
                <div className="col-md-6 col-lg-4 item">
                    <div className="box">
                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                    </div>
                    <div className="author"><img className="rounded-circle" src={Pic1} alt="Pic1" />
                        <h5 className="name">Ben Johnson</h5>
                        <p className="title">CEO of Company Inc.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                    <div className="box">
                        <p className="description">Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id.</p>
                    </div>
                    <div className="author"><img className="rounded-circle" src={Pic2} alt="Pic2" />
                        <h5 className="name">Carl Kent</h5>
                        <p className="title">Founder of Style Co.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                    <div className="box">
                        <p className="description">Aliquam varius finibus est, et interdum justo suscipit. Vulputate quis leo in, vehicula rhoncus lacus.</p>
                    </div>
                    <div className="author"><img className="rounded-circle" src={Pic3} alt="Pic3" />
                        <h5 className="name">Emily Clark</h5>
                        <p className="title">Owner of Creative Ltd.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </>
    );
};

export default Partners;