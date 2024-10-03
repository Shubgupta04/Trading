import React from 'react'

 function Team() {
  return (
    <div className="container">
    <div className="row p-5 ">
      <h1 className='fs-2 text-center'>People</h1>
    </div>  
    <div className="row p-5  text-muted fs-6">
      <div className="col p-5 text-center">
        <img src="media/images/nithinkamath.jpg" alt="nitinKamath" style={{borderRadius:"100%", width:"60%"}}/>
        <h3>Nithin Kamath</h3>
        <h6>Founder, CEO</h6>
      </div>
      <div className="col p-5 fs-6 text-muted">
      <p className='mb-5'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
    
      <p className='mb-5'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

      <p className='mb-5'>Playing basketball is his zen.</p>

      <p className='fs-5' >Connect on <a style={{textDecoration:"none"}} href="">Homepage</a>/ <a style={{textDecoration:"none"}} href="">TradingQnA</a>/ <a    style={{textDecoration:"none"}} href="">Twitter</a></p>
      </div>
    </div>
  </div>
  );
}

export default Team;
