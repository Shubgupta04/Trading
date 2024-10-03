import React from "react";

function LeftImage({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt="image" />
        </div>
        <div  className="col-6 p-5 mt-5 ">
          <h1>{productName}</h1>
          <p style={{width:"80%"}}>{productDescription}</p>
          <div  >
          <a  style={{textDecoration:"none"}} href={tryDemo}>Try Demo</a>
          <a  style={{textDecoration:"none" , marginLeft:"50px"}} href={learnMore}>Learn More</a>
          </div>
          <div className="mt-3">
          <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" /></a>
          <a href={appStore} ><img src="media/images/appstoreBadge.svg" style={{marginLeft:"50px"}}/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftImage;
