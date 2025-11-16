import React from 'react';

import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenACCount from '../OpenAccount';

function Homepage() {
    return ( <>
    <Hero />
    <Awards />
    <Stats />
    <Pricing />
    <Education />
    <OpenACCount/>
    </> );
}

export default Homepage;