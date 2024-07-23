import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Portfolio from './Components/Portfolio'
import Journey from './Components/Journey'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Companies from './Components/Companies'

const App = () => {
  return (
    <div >
      
      <Navbar/>
       <Home/>
       <About/>
       <Service/>
       <Companies/>
       <Portfolio/>
       <Journey/>
       
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App