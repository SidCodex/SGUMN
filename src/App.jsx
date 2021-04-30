import React from 'react';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router';
import Home from './Home';
import Product from './Product';
import Resource from './Resource';
import News from './News';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';

const App =() =>{
    return(
        <>
        <Navbar />
       <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/product' component={Product} />
           <Route exact path='/resource' component={Resource} />
           <Route exact path='/news' component={News} />
           <Route exact path='/about' component={About} />
           <Route exact path='/contact' component={Contact} />
           <Redirect to="/" />
       </Switch>
           
        </>
    );
};

export default App;