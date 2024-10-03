import React from 'react'

 function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5">
        <p className='fs-4 text-muted mb-3'>To create a ticket, select a relevant topic</p>
        <div className="col-4">
          <h5><i class="fa-solid fa-circle-plus mx-1"></i>Account Opening</h5>
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Getting started</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Online</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Offline</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Charges</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Company, Partnership and HUF</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Non Resident Indian (NRI)</a><br />
        </div>
        <div className="col-4">
          <h5><i class="fa-solid fa-user mx-1"></i>Your Zerodha Account</h5>
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Login credentials</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Your Profile</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Account modification and segment addition</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">CMR & DP ID</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Nomination</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Transfer and conversion of shares</a><br />
        </div>
        <div className="col-4">
          <h5><i class="fa-solid fa-chart-simple mx-1"></i>Trading and Markets</h5>
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Trading FAQs</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Kite</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Margins</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Product and order types</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Corporate actions</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Kite features(NRI)</a><br />
        </div>
        <div className="col-4 mt-5">
          <h5><i class="fa-solid fa-wallet mx-1"></i>Account Opening</h5>
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Fund withdrawal</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Adding funds</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Adding bank accounts</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">eMandates</a><br />
          
        </div>
        <div className="col-4 mt-5">
          <h5><i class="fa-solid fa-compass mx-1"></i>Console</h5>
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">IPO</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Portfolio</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Funds statement</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Profile</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Reports</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Referral program</a><br />
        </div>
        <div className="col-4 mt-5">
          <p><i class="fa-solid fa-circle mx-1" ></i> Coin</p>
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Understanding mutual funds and Coin</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Coin app</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Coin web</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">Transactions and reports</a><br />
          <a style={{textDecoration:"none",lineHeight:"2.5",marginLeft:"26px"}}href="">National Pension Scheme (NPS)</a><br />
        </div>
      </div>
    </div>
  )
}
export default CreateTicket;
