import React from 'react'

function Test({id,image}){
  return (
    <div className="card">
        <h1>Item_Number:{id}</h1>
        <img src={image} alt='i'/>
    </div>
  )
}

export default Test