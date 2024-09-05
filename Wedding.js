import React,{useState,useEffect} from 'react'
import WeddingTest from './WeddingTest'


function Wedding(){
  const [set,updateSet]=useState([])
  const [search,updatesearch] = useState("")
  const [setfilter,updatesetfilter] = useState([]) 
 
  useEffect(()=>{
   GetData()
  },[])
  
  async function GetData(){
   const res= await fetch("https://fakestoreapi.com/products");
   const data = await res.json();
   updateSet(data)
   updatesetfilter(data)
 
  }
 
 const handlesearch=()=>{
   const filtersearch = set.filter((e)=>(e.title.toLowerCase().includes(search.toLowerCase())))
   updatesetfilter(filtersearch)
 }
 
 
   return (
    <div className="birthday-page">
    <div  className="search-bar">
     <center>
     <input type='text' value={search} onChange={(e)=>{updatesearch(e.target.value)}}/>
     <button onClick={handlesearch}>Search</button>
     </center>
     </div>
     <div className="cards-container">
    {
     setfilter.map((e)=>{
       return(
         <WeddingTest {...e} key={e.id}/>
         
 
       )
     })
    }
    </div>
 
     </div>
   )
 }
 

export default Wedding