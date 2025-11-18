import React from 'react';
function Pricing() {
    return ( <div className='container mt-5 mb-5'>
        <div className="row mt-5 mb-5">
            <div className=" col-4">
                <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in india. Flat fees and no hidden charges</p>
            <a href="/#" style={{textDecoration:"none"}}>See pricing <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className=" col-2"></div>
            <div className=" col-6">
                <div className="row text-center mt-3 mb-5 ">
                    <div className="col-6 p-3 border">
                        <h1 className='mb-3'>₹0</h1>
                        <p>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className="col-6 p-3 border ">
                          <h1 className="mb-4">₹20</h1>
                        <p >Intraday and F&O</p>
                    </div>
                </div>
            </div>

        </div>
    </div> );
}

export default Pricing;
