import React from 'react';
import bg from '../src/image/bg.svg';
import avatar from '../src/image/avatar.svg';
import Newsletter from './Newsletter';
const Contact = ()  =>{
    return(
        <>
        <section className="d-flex align-item-center " id="contact">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                     <div className="col-md-6 pt-5 pt-md-0 order-2 order-lg-1 d-flex flex-column image">
                       <img src={bg} alt="bg" className="img-fluid animated" />
                     </div>
                     <div className="col-md-6 pt-5 my-3 pt-md-0 order-1 order-lg-2 d-flex flex-column box ">
		<div className="img">
			<img src={avatar} alt="avatar" />
		</div>  
		<h2>Contact Us</h2>
		<form >
			<div>
				<input type="text" name="" required="" placeholder="Full Name" />
				<label>Name</label>
			</div>
			<div>
				<input type="email" name="" required="" placeholder="Your Email" />
				<label>Email</label>
			</div>
			<div>
				<textarea required="" placeholder="message"></textarea>
				<label>Mesasge</label>
			</div>
			<input type="submit" name="" value="submit" className="btn" />
		</form>
                     </div>
                    </div>
                </div>
            </div>
        </section>
		<Newsletter />
        </>
    );
};

export default Contact;