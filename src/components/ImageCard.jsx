import React from 'react'

const ImageCard = ({mydata}) => {
    console.log(mydata);
  return ( mydata
    .map((item) =>
    <div>
      <img src={item.src.large} alt="weimar" style={{ width: '200px' }} />
     <p>{item.photographer}</p> 
  </div>)
    
  )
}

export default ImageCard;