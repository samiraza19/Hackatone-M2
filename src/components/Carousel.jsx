import React from 'react'

const Carusoel = () => {
  return (
<div className="carousel w-">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://healthcareandprotection.com/wp-content/uploads/2021/05/Blood-Bank-02-v2-750x375.png" className="w-full h-80 " />
    <div className="object-cover	 absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
 
  
</div>
  )
}

export default Carusoel