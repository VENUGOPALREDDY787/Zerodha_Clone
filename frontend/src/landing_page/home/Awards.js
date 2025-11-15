import React from 'react';
function Awards() {
    return ( <div className='container p-5 mt-5 mb-5'>
        <div className='row'>
            <div className='col-6 p-3 ml-5 pe-3'>
                <img src='media/largestBroker.svg' alt="awards" />
            </div>
            <div className='col-6  p-3 ps-5 mt-3 '>
                <h1>Largest stock broker in india</h1>
                <p className='mb-5' >2+ million Zerodha clients contribute over 15% of all retial order volumes in india daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivarives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual Funds</li>
                                <li>Bonds and Gov secuirtes</li>
                            </ul>   
                        </div>
                    </div>
                < img src='media/pressLogos.png' alt='awards' style ={{ width:"80%"}}/>
            </div>
        </div>
    </div> );
}

export default Awards;