import React from 'react'
import { Button} from 'antd';
import Moreproducts from './Moreproducts';
const Productdetails = () => {

    return (
        <div className='flex-col xl:justify-center px-[10px] py-[5px] sm:px-[25px] sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:justify-center 2xl:gap-[100px] flex items-center justify-between'>
            <div className=' flex w-[100%] h-[260px] sm:h-[340px] lg:h-[400px] xl:w-[1000px] 2xl:w-[1200px] selector-image mt-[30px] mb-[30px] '>
                <div className='w-[50%] h-[260px] sm:h-[340px] lg:h-[400px]  ' >
                    <div className=' w-[100%] h-[200px] sm:h-[250px] lg:h-[300px] p-1 flex justify-center items-center py-[10px]'>
                        <img className=' w-[180px] rounded-lg sm:w-[220px] md:w-[240px] lg:w-[260px]' src="https://m.media-amazon.com/images/I/41EZIPoEswL._SX342_SY445_.jpg" alt="" />
                    </div>
                    <div className='flex  items-center justify-center gap-[8px] md:gap-[15px] lg:gap-[25px] p-1 py-[10px]'>
                        <div>
                            <img className='w-[40px] rounded-md sm:w-[60px] lg:w-[70px] ' src="https://m.media-amazon.com/images/I/71kRS8BlW-L._SL1500_.jpg" alt="" />
                        </div>
                        <div>
                            <img className='w-[40px] rounded-md  sm:w-[60px] lg:w-[70px]' src="https://m.media-amazon.com/images/I/71kRS8BlW-L._SL1500_.jpg" alt="" />
                        </div>
                        <div>
                            <img className='w-[40px] rounded-md sm:w-[60px] lg:w-[70px]' src="https://m.media-amazon.com/images/I/71nFgXwaxQL._SL1500_.jpg" alt="" />
                        </div>
                        <div>
                            <img className='w-[40px] rounded-md sm:w-[60px] lg:w-[70px]' src="https://m.media-amazon.com/images/I/71kRS8BlW-L._SL1500_.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-[50%] h-[auto]  items-center     flex flex-col justify-between'>
                    <div className='p-1 sm:px-[15px] md:px-[35px] lg:px-[45px] lg:py-[20px] xl:py-[30px] xl:px-[55px] flex flex-col justify-center gap-[5px] sm:gap-[12px]  '>
                        <div className='flex flex-col gap-[4px]'>
                            <p className='text-[12px] font-semibold sm:text-[16px] md:text-[17px] lg:text-[18px] 2xl:text-[20px]'>Crompton Night Buddy 0.5 Watt Night Lamp with USB Charging Adapter Port (Cool Day Light) Pack of 1</p>
                            <p className='text-[9px] sm:text-[12px]'>By Triumph Lights</p>
                        </div>
                       
                        <div className='py-[2px]'>
                            <div>
                                <p className='text-[13px] font-regular sm:text-[16px]'>Quantity</p>
                            </div>
                            
                        </div>
                        <div className='flex justify-between'>
                            <div> <p  className='text-[15px] font-semibold sm:text-[19px]'>Rs.99/-</p></div>
                            <div className='flex gap-[5px] items-center'>
                                <div><p className='text-[13px]  sm:text-[16px]'>Color</p></div>
                                <div className=' bg-amber-700 w-[10px] h-[10px] rounded-lg'></div>
                                <div className=' bg-amber-400 w-[10px] h-[10px] rounded-lg'></div>
                                <div className=' bg-amber-500 w-[10px] h-[10px] rounded-lg'></div>

                            </div>
                        </div>
                       

                        <div>
                            <div><p className='text-[12px] font-light sm:text-[16px]'>Ratings</p></div>
                            <div className='flex'>
                                 <div><img className='w-[14px]' src="star.png
                                 " alt="" /></div>
                                 <div><img className='w-[14px]' src="star.png
                                 " alt="" /></div>
                                 <div><img className='w-[14px]' src="star.png
                                 " alt="" /></div>
                                 <div><img className='w-[14px]' src="star.png
                                 " alt="" /></div>
                                 <div><img className='w-[14px]' src="halfstar.png
                                 " alt="" /></div>
                                 <div className='flex items-center'>
                                    <p className='text-[9px]'>4.5</p>
                                 </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[5px]'>
                          <Button className='h-[22px] sm:h-[30px] text-[12px]' type="primary"><p>Add To Cart</p></Button>
                          <Button className='h-[22px] text-[12px]  sm:h-[30px]' type="primary"><p>Buy Now</p></Button>
                        </div>

                        
                        
                    </div>
                </div>
            </div>

           
        
        </div>
    )
}

export default Productdetails