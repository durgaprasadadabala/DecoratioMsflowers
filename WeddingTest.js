import React from 'react'

function WeddingTest({id,image}){
  return (
    <div className="card">
    <h1>Wedding_Image_Number :{id}</h1>
    <img src={image} alt='i'/>

    </div>
  )
}

export default WeddingTest