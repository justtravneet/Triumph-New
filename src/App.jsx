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








function App() {
   

  return (
    <> 
      
      <BrowserRouter>
         <Heroone />
         
            <Routes>
                
                 <Route path="/Triumph" element={ <Home />} />
                 <Route path="/" element={ <Home />} />
                 <Route path="/Triumph/shop" element={ <Search />} />
                 <Route path="Triumph/Contact-us" element={ <Contactus />} />
                 <Route path="Triumph/About-us" element={ <About/>} />
                 <Route path="Triumph/Add-to-cart" element={ <Addtocart/>} />
                 <Route path="Triumph/Wishlist" element={ <Wishlist/>} />
                 <Route path="Triumph/Product-details" element={ <Productdetails/>} />
                 <Route path="Triumph/Privacy-Policy" element={ <Privacy />} />
                 <Route path="Triumph/Termandconditions" element={ <Termandconditions />} />
                 <Route path="Triumph/Refundpolicy" element={ <Refundpolicy />} />
                

            </Routes>
         <Herolast />
      </BrowserRouter>
     
      
       
         
         
    
        
        
    </>
  )
}

export default App
