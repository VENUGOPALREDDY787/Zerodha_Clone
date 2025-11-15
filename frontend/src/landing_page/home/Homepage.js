import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenACCount from '../OpenAccount';

function Homepage() {
    return ( <>
    <Navbar />
    <Hero />
    <Awards />
    <Stats />
    <Pricing />
    <Education />
    <OpenACCount/>
    <Footer />  
    </> );
}

export default Homepage;