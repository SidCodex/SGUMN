import React from 'react';
import Invest from './Invest';
import Homeabout from './Homeabout';
import Process from './Process';
import Team from './Team';
import Partners from './Partners';
import Newsletter from './Newsletter';
import Cards from './CARDS/Cards';

const Home = () =>{
    return(
        <>
        <Invest />
        <Homeabout />
        <Cards />
        <Process />
        <Team />
        <Partners />
        <Newsletter />   
            
        </>
    );
};

export default Home;
