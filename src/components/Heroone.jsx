import React, { useState,useRef,useEffect } from 'react'
import { Megaphone, AlignJustify, Search, Heart, ShoppingBag,ChevronRight } from "lucide-react"
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import {motion} from "framer-motion"


function Heroone() {
  
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };
  const handlecloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  const sidebarRef = useRef(null);
  
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handlecloseSidebar()
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div >
      {/* Exclusive */}
      <div className='exclusive  flex items-center justify-center gap-[2px] py-[3px] md:gap-[4px] md:py-[3px]  '>
        <div>
          <Megaphone size={25} strokeWidth={1.5} color="#fcf8f8" />
        </div>
        <div>
          <p className='text-[14px] text-white'>Get exclusive deals upto <span className=' font-semibold'>25%</span> </p>
        </div>
      </div>

      {/* navbar */}



      <div>
        <div className='navback   sticky'>
          <div className='  px-[10px] py-[5px] sm:px-[25px] sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:justify-center 2xl:gap-[100px] flex items-center justify-between'>
            <div>
              <img className='w-[150px] sm:w-[180px] lg:w-[220px]' src="logo.png" alt="" />
            </div>

            <div className='menu flex-col'>
              <ul className='flex  gap-[25px]  mr-[0px]  tracking-wider'>
                <Link to="/"> <li><a href="http://" className='info text-[16px] '> <p className='infoss'>Home</p></a></li></Link>
                <Link to="/Triumph/shop"> <li><a href="http://" className='info text-[16px]'> <p className='infoss'>Shop</p></a></li></Link>
                <Link to="/Triumph/Contact-us"><li><a href="http://" className='info text-[16px] '> <p className='infoss'>Contact Us</p></a></li></Link>
                <Link to="/Triumph/About-us"><li><a href="http://" className='info text-[16px] '> <p className='infoss'>About Us</p></a></li></Link>

              </ul>
            </div>

            <div className='inputback w-[350px] flex gap-[5px] items-center justify-between'>
              <div className='inputs '>
                <input className='searchbar rounded-md' type="text" placeholder='Search products' />
              </div>
              <div>
                <Search className=' w-[18px] ' color='#ffffff' strokeWidth={1.5} />
              </div>
            </div>


            <div className='flex gap-[15px]'>
              <div className='searchicon'>
                <Link to="/Triumph/shop"> <Search className='w-[25px] sm:w-[30px] lg:w-[35px]' color='#ffffff' strokeWidth={1.5} /> </Link>
              </div>
              <div>
              <Link to="/Triumph/Wishlist"><Heart className='w-[25px] sm:w-[30px] lg:w-[35px] xl:w-[45px]' color='#ffffff' strokeWidth={1.5} /></Link> 
              </div>
              <div>
              <Link to="/Triumph/Add-to-cart"><ShoppingBag className='w-[25px] sm:w-[30px] lg:w-[35px] xl:w-[45px]' color='#ffffff' strokeWidth={1.5} /></Link>  
              </div>

              <div className='menuicon ' onClick={handleOpenSidebar}   >
                <AlignJustify size={28} className=' ' color='#ffffff' strokeWidth={1.5} />
              </div>

            </div>


          </div>
        </div>

       {
         isSidebarOpen&&
        <div ref={sidebarRef}>
 
           <motion.div 
          
          initial={{x: -250}}
           animate={{x: 0}}
           transition={{
            
            duration: 1,
            x: { duration: 0.5 }
          }}
      
      
      className='  slidenav  w-[220px] h-[100%] sm:w-[290px] md:w-[320px]  xl:px-[100px] 2xl:justify-center ]'>
        <div className='2xl:justify-center flex flex-col  '>
          <div>
               <img src="back.jpg" alt="" />
          </div>
         
            <div className='intext px-[20px] sm:px-[30px]   py-[10px] border '>
               <Link className='flex justify-between ' to="/">
                  <div><p className=''>Home</p></div>
                  <div><ChevronRight /></div>
               </Link>
            </div>

            <div className='intext px-[20px] sm:px-[30px]   py-[10px] border '>
               <Link className='flex justify-between ' to="/Triumph/shop">
                  <div><p className=''>Shop</p></div>
                  <div><ChevronRight /></div>
               </Link>
            </div>

            <div className='intext px-[20px] sm:px-[30px]   py-[10px] border '>
               <Link className='flex justify-between ' to="/Triumph/Contact-us">
                  <div><p className=''>Contact Us</p></div>
                  <div><ChevronRight /></div>
               </Link>
            </div>

            <div className='intext px-[20px] sm:px-[30px]   py-[10px] border '>
               <Link className='flex justify-between ' to="/Triumph/About-us">
                  <div><p className=''>About Us</p></div>
                  <div><ChevronRight /></div>
               </Link>
            </div>
          
         
        </div>

      </motion.div>
        </div>
        

       }

        {/* <div>

            {
              status ? <Slide /> : null

            }


          </div> */}



       





      </div>







    </div>
  )
}

export default Heroone