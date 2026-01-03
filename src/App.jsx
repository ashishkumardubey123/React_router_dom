import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import About from './pages/about'
import Services from './pages/services'
import Contact from './pages/contact'
import Home from './pages/Home'
import NotFound from './pages/Notfound'
import WebDevelopment from './pages/Webdevelopment'
import SEO from './pages/Seo'
import ContentCreation from './pages/Contentcreation'

function App() {
  return (
    <div className=" h-screen w-screen text-white mx-auto bg-gray-800  " >
        <nav className=' p-7 flex text-white justify-between  bg-gray-950'>
            <div className='text-2xl font-bold'>
              <h1 >Navbar </h1>
            </div>
            <div>
              <ul className='flex  gap-10 '>
              <Link  className='  active:text-yellow-950 hover:text-yellow-400 p-3 border rounded-md' to="/" >
              Home
              </Link>
                
              <Link className=' hover:text-yellow-400 p-3 hover:bg-black border rounded-md' to="/about" >
              About
              </Link>
                
              <Link  className=' hover:text-yellow-400 p-3 hover:bg-black border rounded-md'to="/services" >
              Services
              </Link>
                
              <Link className=' hover:text-yellow-400 p-3 hover:bg-black border rounded-md' to="/contact" >
             Contact Us
              </Link>

            
                
               
              </ul>


            </div>
        </nav>
         
         <div>
          <Routes>
          <Route path='/' element={ <Home/>}/ > 
          <Route path='/About' element={ <About/>}/ > 
          <Route path='/Services' element={ <Services/>}/ > 
          <Route path='/Contact' element={ <Contact/>}/ > 
          <Route path='/:id' element={ <NotFound/>}/ > 
          <Route path='services/webdevelopment' element={<WebDevelopment/>}/>
          <Route path='services/Seo' element={<SEO/>}/>
          <Route path='services/content' element={<ContentCreation/>}/>


          
      
          </Routes>
         </div>

    </div>
  )
}

export default App
