import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import Card from './Pages/Card'
function App() {
  return (
    <div>
      <Routes>
        <Route path = "/home" element = {<Home/>} />
        <Route path = "/restaurant" element = {<Card/>} />
      </Routes>
    </div>
  )
}

export default App