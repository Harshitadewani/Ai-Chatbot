import React from 'react'
import Chatbot from './component/Chatbot'
import LandingPage from "./component/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/chat' element={<Chatbot/>}/>
    </Routes>
   </Router>
  )
}

export default App