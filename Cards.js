import React from 'react'
import Empty from './empty'
import {BrowserRouter,Route ,Link, Routes} from 'react-router-dom'
import Birthday from './Birthday'
import Wedding from './Wedding'


function Cards(){
  return (
    <div>
    <BrowserRouter>
    <ul>
        <li><Link to={'/'}><button>Home</button></Link></li>
        <li><Link to={'/Birthday'}><button>Birthday</button></Link></li>
        <li><Link to={'/Wedding'}><button>Wedding</button></Link></li>
    </ul>
        <Routes>
        <Route path='/' element={<Empty/>}/>
        <Route path='/Birthday' element={<Birthday/>}/>
        <Route path='/Wedding' element={<Wedding/>}/>

        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Cards