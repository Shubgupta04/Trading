import React from 'react'

 function Hero() {
  return (
   <div className="container">
    <div className="row text-center border-bottom mt-5 mb-5">
    <h1>Pricing</h1>
    <h3 className='mb-5 fs-3'>Free equity investments and flat ₹20 intraday and F&O trades</h3>
    </div>
    <div className="row p-5 text-center border-bottom">
      <div className="col-4 p-5 ">
        <img src="media/images/pricing0.svg" alt="" />
        <h3>Free equity delivery</h3>
        <p className='mt-3 fs-6 text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
      </div>
      <div className="col-4 p-5">
        <img src="media/images/intradayTrades.svg" alt="" />
        <h3>Intraday and F&O trades</h3>
        <p className='mt-3 fs-6 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
      </div>
      <div className="col-4 p-5">
        <img src="media/images/pricingMF.svg" alt="" />
        <h3>Free direct MF</h3>
        <p className='mt-3 fs-6 text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
      </div>
    </div>
   </div>
  );
}
export default Hero;
