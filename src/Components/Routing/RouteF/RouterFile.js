import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from '../Home'
import Bollywood from '../Bollywood'
import Hollywood from '../Hollywood'
import Fitness from '../Fitness'
import Technology from '../Technology'
import Food from '../Food'
import PageNotFound from '../PageNotFound'
import ContextAPI from '../ContextAPI'
import DetailDescription from '../DetailDescription'
const RouterFile = () => {
  return (
<div className="comps">
  <ContextAPI>
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/bollywood" element={<Bollywood/>}/>
    <Route path="/hollywood" element={<Hollywood/>}/>
    <Route path="/fitness" element={<Fitness/>}/>
    <Route path="/technology" element={<Technology/>}/>
    <Route path="/food" element={<Food/>}/>
    <Route path="/detaildescription/:id" element={<DetailDescription/>}/>
    <Route path="*" element={<PageNotFound/>}/>

    </Routes>
    
    </BrowserRouter>
  </ContextAPI>
</div>
  )
}

export default RouterFile