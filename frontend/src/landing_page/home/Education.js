<<<<<<< HEAD
import React from 'react';
function Education() {
    return ( <div className="container mt-5 mb-5">
        <div className="row mt-5">
            <div className="col-6 p-2 pe-5">
                <img style={{width:"90%"}} src='media/education.svg'></img>
            </div>
            <div className="col-6 mt-3">
                <h1 className="fs-2">Free and open market education</h1>
                <p className="mt-5">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading</p>
                <a href="/#" style={{textDecoration:"none"}}>Versity<i className="fa-solid fa-arrow-right"></i></a>
                <p className="mt-5"> TradingQ&A, the most active trading and inverstment community in india for all your market related quieires</p>
                <a href="/#" style={{textDecoration:"none"}}>TradingQ&A<i className="fa-solid fa-arrow-right"></i></a>

            </div>
        </div>
    </div> );
}

export default Education;
=======
import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" style={{ width: "70%" }} />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
>>>>>>> guide/21-creating-dashboard-components
