import React from 'react'

function RightImage({
  imageURL,
  productName,
  productDescription,
 
  learnMore,
  
}) {
  return (
    <div className="container mt-5 ">
    <div className="row">
      <div  className="col-6 p-5 mt-5">
        <h1 className='mt-5'>{productName}</h1>
        <p style={{width:"80%"}}>{productDescription}</p>
        <a  style={{textDecoration:"none", marginTop:"50px"}} href={learnMore}>Learn More <i className="fa-solid fa-arrow-right" /></a>
       </div>
      <div className="col-6">
        <img src={imageURL} alt="image" />
      </div>
    </div>
  </div>
  );
}

export default RightImage;
