import React,{Component} from 'react';
import CardUI from './CardUI';
import img1 from '../image/fixed1.jpg';
import img2 from '../image/recurring.jpg';
import img3 from '../image/saving1.jpg';
import img4 from '../image/loan.jpg';
import img5 from '../image/secure.jpg';
import img6 from '../image/expert_spport.jpg';

class Cards extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <>
            <section id="card_id" className="my-5">
            <div className="main-head">
                <h1 className="text-center text-white mt-3">Our Features & Products</h1>
            </div>
            <div className="container-fluid d-flex justify-content-center card-container">
                <div className="col-10 mx-auto">
                <div className="row gy-4">
               <div className="col-md-4">
                   <CardUI 
                   imgsrc={img1} 
                   title={"Fixed Deposite"}
                   paragraph={"A fixed deposit (FD) is a financial instrument provided by banks or NBFCs which provides investors a higher rate of interest than a regular savings account, until the given maturity date. It may or may not require the creation of a separate account."}
                   button={"read more"} />
               </div>
               <div className="col-md-4">
                   <CardUI 
                   imgsrc={img2} 
                   title={"Recurring Deposite"}
                   paragraph={"A recurring deposit is a special kind of term deposit offered by banks which help people with regular incomes to deposit a fixed amount every month into their recurring deposit account and earn interest at the rate applicable to fixed deposits."}
                   button={"read more"} />
               </div>
               <div className="col-md-4">
                   <CardUI 
                   imgsrc={img3} 
                   title={"Saving Account"}
                   paragraph={"A savings account is a basic type of bank account that allows you to deposit money, keep it safe, and withdraw funds, all while earning interest. Savings accounts offered by most banks, credit unions, and other financial institutions are FDIC insured and typically..."}
                   button={"read more"} />
               </div>
               <div className="col-md-4">
                   <CardUI 
                   imgsrc={img4} 
                   title={"Loan"}
                   paragraph={"In finance, a loan is the lending of money by one or more individuals, organizations, or other entities to other individuals, organizations etc. The recipient incurs a debt, and is usually liable to pay interest on that debt until it is repaid, and also to repay the principal amount borrowed."}
                   button={"read more"} />
               </div>
               <div className="col-md-4">
                   <CardUI 
                   imgsrc={img5} 
                   title={"Safe & Secure"}
                   paragraph={"Important Security Tips For Safe & Secure Online Banking.Access your bank website only by typing the URL in the address bar of your browser. Safe & Secure stores customers data in secure server. The first data center is dedicated to production, no down-time of servers and 100 % recovery data center."}
                   button={"read more"} />
               </div>
               <div className="col-md-4">
                   <CardUI 
                   imgsrc={img6} 
                   title={"Expert Support"}
                   paragraph={"Comprehensive mind+machine solutions to keep your deal teams, product groups and sector groups at the top of their game.Get in touch today to ﬁnd out about how Evalueserve can help you improve your processes, making you better, faster and more efﬁcient."}
                   button={"read more"} />
               </div>
              
                </div>
                </div>    
            </div>
            </section>
            </>
        );
    };
};

export default Cards;
 