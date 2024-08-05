import  React from 'react'

import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Heroone from './components/Heroone'
import Herolast from './components/Herolast'

import Home from './components/Home';
import Search from './components/Search';








function App() {
   

  return (
    <> 
      
      <BrowserRouter>
         <Heroone />
         
            <Routes>
                
                
               <Route path='/' element={<Home /> } />
               <Route path='/shop' element={<Search /> } />
              
                  
               
                
               

            </Routes>
            
         <Herolast />
      </BrowserRouter>
     
      
       
         
         
    
        
        
    </>
  )
}

export default App
