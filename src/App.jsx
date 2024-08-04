import  React from 'react'

import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Heroone from './components/Heroone'
import Herolast from './components/Herolast'
import Contactus from './components/Contactus'
import Search from './components/Search'
import Home from './components/Home';
import About from './components/About';
import Addtocart from './components/Addtocart';
import Wishlist from './components/Wishlist';
import Productdetails from './components/Productdetails';
import Privacy from './pages/Privacy';
import Termandconditions from './pages/Termandconditions';
import Refundpolicy from './pages/Refundpolicy';
import Adminpanel from './pages/Adminpanel';








function App() {
   

  return (
    <> 
      
      <BrowserRouter>
         <Heroone />
         
            <Routes>
                
                
                 
                 

            </Routes>
            
         <Herolast />
      </BrowserRouter>
     
      
       
         
         
    
        
        
    </>
  )
}

export default App
