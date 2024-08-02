import React, { useState } from 'react'
import { Button, Flex } from 'antd';
const Wishlist = () => {


     let [count, setCount] = useState(0);
     function incrementCount() {
          count = count + 1;
          setCount(count);
     }
     function decrementCount() {
          count = count - 1;
          setCount(count);
     }
     return (
          <div className='  px-[10px] py-[5px] sm:px-[25px] lg:flex lg:justify-center sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:justify-center 2xl:gap-[100px]'>
               

               <div className=' cart-conatiner h-[450px]  flex  flex-col lg:w-[80%] 2xl:w-[1200px] p-4 md:p-8 '>

                <div className='py-[5px] h-[50px] md:flex md:justify-center'>
                         <div className='md:w-[80%]'> <p className='text-[18px] font-semibold'>Your Wishlist !</p></div>
                          
                </div>
                 <div className=' flex flex-col h-[300px] py-[10px]'>
                    <div className='md:justify-center md:flex lg:justify-center  lg:flex'>
                         <div className=' cartsback w-[100%] h-[90px] md:w-[80%] flex justify-around gap-[10px]  p-2 '>
                              <div className='w-[80px]'>
                                   <img className='rounded-lg' src="cartimg1.jpg" alt="" />
                              </div>

                              <div>
                                   <p className='text-[13px]'>Boat Headphones</p>
                                   <p className='text-[10px]'>xxxxx</p>
                                   <div className=' flex items-center gap-[5px]'>
                                        <div> <p className='text-[13px]'>Color</p></div>
                                        <div className=' bg-slate-600 h-[10px] w-[10px] rounded-xl'></div>
                                        <div className=' bg-slate-400 h-[10px] w-[10px] rounded-xl'></div>
                                        <div className=' bg-slate-200 h-[10px] w-[10px] rounded-xl'></div>

                                   </div>

                              </div>

                              <div className='px-[5px] flex flex-col  justify-between'>
                                  
                                   <div className=' '>
                                        <p className='text-[14px]'>Rs.999/</p>
                                   </div>

                                   <div className='flex justify-center'>
                                        <div><button><p><img className='w-[15px]' src="trashimg.png" alt="" /></p></button></div>
                                   </div>
                              </div>
                         </div>
                    </div>

                   
     
                 </div>

                  
                   
               </div>
          </div>
     )
}

export default Wishlist