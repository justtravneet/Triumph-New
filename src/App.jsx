import  React from 'react'

import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Heroone from './components/Heroone'
import Herolast from './components/Herolast'

import Home from './components/Home';
import Search from './components/Search';
import Contactus from './components/Contactus';
import About from './components/About';
import Wishlist from './components/Wishlist';
import Addtocart from './components/Addtocart';
import Adminpanel from './pages/Adminpanel';
import Productsdetails from './pages/Productdetails';
import Adminsignup from './pages/Adminsignup';
import Adminlogin from './pages/Adminlogin';








function App() {
   

  return (
    <> 
      
      <BrowserRouter>
        
         
            <Routes>
                
                
               <Route path='/' element={<Home /> } />
              
               <Route path='/shop' element={<Search /> } />
               <Route path='/products/item' element={<Productsdetails /> } /> 
               <Route path='/contact-us' element={ <Contactus /> } />
               <Route path='/About-us' element={ <About /> } />
               <Route path='/wishlist' element={ <Wishlist /> } />
               <Route path='/add-to-cart' element={ <Addtocart/> } />

               <Route path='/admin-panel' element={<Adminpanel /> } />
               <Route path='/admin-signup' element={<Adminsignup /> } />
               <Route path='/admin-login' element={<Adminlogin /> } />
              
                  
               
                
               

            </Routes>
            
      
      </BrowserRouter>
     
      
       
         
         
    
        
        
    </>
  )
}

export default App
