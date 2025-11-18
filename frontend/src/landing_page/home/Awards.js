<<<<<<< HEAD
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
=======
import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
>>>>>>> guide/21-creating-dashboard-components
