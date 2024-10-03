import React from 'react'

 function Hero() {
  return (
  <section className='container-fluid' id="supportHero">
     <div className='p-4 ml-5'  id="supportWrapper">
     <h4>Support Portal</h4>
     <a href="" style={{color:"white"}}>Track Tickets</a>
    </div>
    <div className="row p-3 " id='contentWrapper'>
      <div className="col-6 p-3">
        <h1 className='fs-4'>Search for an answer or browse help topics to create a ticket</h1>
        <input type="text" placeholder='Eg. how do I activate F&O' />
        <a href="">Track account</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="">opening Track </a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="">segment activation </a>&nbsp;&nbsp;&nbsp;&nbsp;<br />
        <a href="">Intraday margins </a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="">Kite user manual</a>&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div className="col-6 p-3  mb-5">
        <h1 className="fs-4">Featured</h1>
        <ol>
          <li><a href="">Surveillance measure on scrips - August 2024</a></li>
 
          <li><a href="">Latest Intraday leverages and Square-off timings</a></li>
        </ol>
      </div>
    </div>
  </section>
  );
}

export default Hero;
