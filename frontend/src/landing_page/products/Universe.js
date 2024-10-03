import React from 'react'

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center text-muted">
        <h1 className='fs-3'>The Zerodha Universe</h1>
        <h5 className='mb-5 fs-5 mt-2'>Extend your trading and investment experience even further with our partner platforms</h5>
       <div className="row">
       <div className="col-4 p-3 mt-5">
          <img src="media/images//smallcaseLogo.png" alt="" />
          <p>Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images//streakLogo.png" style={{width:"40%"}} alt="" />
          <p>Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images//sensibullLogo.svg"  style={{width:"60%"}}alt="" />
          <p>Options trading platform</p>
        </div>
       </div>

       <div className="row">
       <div className="col-4 p-3 mt-5">
          <img src="media/images//zerodhaFundhouse.png" style={{width:"50%"}} alt="" />
          <p>Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images//goldenpiLogo.png" style={{width:"50%"}} alt="" />
          <p>Fundamental research platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images//dittoLogo.png" style={{width:"35%"}} alt="" />
          <p>Insurance</p>
        </div>
       </div>
       
        
        <button className='p-2 btn btn-primary mt-5 fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Sign up now</button>
      </div>
    </div>
  );
}
export default Universe;
