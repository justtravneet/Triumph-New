import React, { useEffect } from 'react'

import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Heroone from './components/Heroone'
import Herolast from './components/Herolast'

import Home from './pages/Home';
import Search from './components/Search';
import Contactus from './components/Contactus';
import About from './components/About';
import Wishlist from './components/Wishlist';
import Addtocart from './pages/Addtocart';

import Productsdetails from './pages/Productdetails';

import Dashboard from './pages/admin/Dashboard';
import AdminLogin from './pages/admin/AdminLogin';
import { RecoilRoot } from 'recoil';
import Checkout from './pages/Checkout';
import YourOrders from './pages/YourOrders';
import OrderPage from './pages/OrderPage';
import Termandconditions from './pages/Termandconditions';
import Privacy from './pages/Privacy';
import Refundpolicy from './pages/Refundpolicy';
import NotFound from './components/general/NotFound';
import { initializeScheduler } from './utils/tokenSchedular';


function App() {


  useEffect(() => {
    // Initialize scheduler on app start
    if (localStorage.getItem('cartToken')) {
      initializeScheduler();
    }
  }, []);

  return (
    <div className=''>
      <RecoilRoot>

        <BrowserRouter>


          <Routes>


            <Route path='/' element={<Home />} />
            <Route path='/terms-and-conditions' element={< Termandconditions />} />
            <Route path='/privacy-policy' element={< Privacy />} />
            <Route path='/refund-policy' element={< Refundpolicy />} />
            <Route path='/termandconditions' element={< Termandconditions />} />

            <Route path='/shop' element={<Search />} />
            <Route path='/products/item/:product_id' element={<Productsdetails />} />
            <Route path='/contact-us' element={<Contactus />} />
            <Route path='/About-us' element={<About />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/cart' element={<Addtocart />} />
            <Route path='/cart/checkout/:token' element={<Checkout />} />
            <Route path='/orders' element={<YourOrders />} />
            <Route path='/orders/:orderId' element={<OrderPage />} />

            <Route path="/admin/*" element={<Dashboard />} />  {/* Updated this line */}
            <Route path='/admin/login' element={<AdminLogin />} />

            {/* Catch-all route for 404 Not Found */}
            <Route path="*" element={<NotFound />} />

          </Routes>


        </BrowserRouter>

      </RecoilRoot>






    </div>
  )
}

export default App
