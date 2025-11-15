import React from 'react';
function Stats() {
    return ( <div className="container p-5 mt-5 mb-5">
        <div className="row pt-5">
            <div className = "col-6">
                <h1 className="mb-5">Trust with confidence</h1>
                <h4> Costumer-first always</h4>
                <p className='text-muted'> That's why 1.3cr customer trust Zerodha with 3.5+ lakh crores worth of equity investement</p>
                 <h4> No spam or gimmicks</h4>
                <p className='text-muted'> No gimmicks , spam "gamification", or annoying push notification. High quality apps that you use at ayour pace, the way you like</p>
                 <h4> The Zerodha Universe</h4>
                <p className='text-muted'> Not just an app, but a whole ecosystem. Our investement in 30+fintech startups offer you tailore servies specific to your needs</p>
                 <h4> Do better with money</h4>
                <p className='text-muted'>with initiatives like Nudge and Kill Switch, we don't just facilitate transactions , but actively help you to do better with your money</p>
            </div>
            <div className = "col-6 ps-5">
                <img src='media/ecosystem.png' style={{width:"100%"}}></img>
                <div className='text-center'>
                    <a href="/#" className="mx-5"  style={{textDecoration:"none"}}>Explore our Products <i className="fa-solid fa-arrow-right"></i></a>
                    <a href="/#" style={{textDecoration:"none"}}>Try kite Demo <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </div>);
}

export default Stats;