import React from 'react'

 function Footer() {
  return (
  <footer style={{backgroundColor:"rgb(240  240 240)"}}>
  <div className="container border-top mt-5">
    <div className="row mt-5">
      <div className="col-3">
        <img src="media/images/logo.svg" style={{width:"40%"}} alt="logo" />
        <p>© 2010 - 2024, Zerodha Broking Ltd.</p>
        <p>All rights reserved.</p>
      </div>
      <div className="col-3">
        <h5>Company</h5>
        <a style = {{textDecoration:"none", lineHeight:"2"}} className = "text-muted" href='' >About</a><br />
        <a style = {{textDecoration:"none", lineHeight:"2"}} className = "text-muted" href='' >Products</a><br />
        <a style = {{textDecoration:"none", lineHeight:"2"}}  className = "text-muted"href='' >Pricing</a><br />
        <a style = {{textDecoration:"none", lineHeight:"2"}} className = "text-muted" href='' >Referral programme</a><br />
        <a style = {{textDecoration:"none", lineHeight:"2"}} className = "text-muted" href='' >Careers</a><br />
        <a style = {{textDecoration:"none", lineHeight:"2"}} className = "text-muted" href='' >Zerodha Cares (CSR)</a><br />
        <a style = {{textDecoration:"none", lineHeight:"2"}} className = "text-muted" href='' >Zerodha.tech</a><br />
        <a style = {{textDecoration:"none", lineHeight:"2"}} className = "text-muted" href='' >Press & media</a><br />
      </div>
      <div className="col-3 text-muted">
        <h5>Support</h5>
        <a style = {{textDecoration:"none", lineHeight:"2"}} className = "text-muted" href=''>Contact us</a><br />
        <a style = {{textDecoration:"none", lineHeight:"2"}} className = "text-muted" href=''>Support portal</a><br />
        <a style = {{textDecoration:"none", lineHeight:"2"}} className = "text-muted" href=''>Z-Connect blog</a><br />
        <a style = {{textDecoration:"none", lineHeight:"2"}} className = "text-muted" href=''>List of charges</a><br />
        <a style = {{textDecoration:"none", lineHeight:"2"}} className = "text-muted" href=''>Downloads & resources</a><br />
        <a style = {{textDecoration:"none", lineHeight:"2"}} className = "text-muted" href=''>Videos</a><br />
        <a style = {{textDecoration:"none", lineHeight:"2"}} className = "text-muted" href=''>Market overview</a><br />
        <a style = {{textDecoration:"none", lineHeight:"2"}} className = "text-muted" href=''>How to file a complaint?</a><br />
        <a style = {{textDecoration:"none", lineHeight:"2"}} className = "text-muted" href=''>Status of your complaints</a><br />
      </div>
      <div className="col-3 text-muted">
        <h5>Account</h5>
        <a style = {{textDecoration:"none", lineHeight:"2"}} className = "text-muted" href="">Open an account</a><br />
        <a style = {{textDecoration:"none", lineHeight:"2"}} className = "text-muted" href=''> 60 day challange</a><br />
        <a style = {{textDecoration:"none", lineHeight:"2"}} className = "text-muted" href=''> Fund transfer</a><br />
      </div>
    </div>

    <div className='mt-5 text-small' style={{fontSize:"14px"}}>
    <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
    <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
    <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
    
    
    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
  </div>
  </div>
  </footer>
  );
}

export default Footer;
