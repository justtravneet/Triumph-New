import React from 'react'
import { User, Bell} from 'lucide-react'
import { Button, } from 'antd';
const Adminpanel = () => {
    return (
        <div className=' flex justify-center  '>

            <div className='  px-[10px] py-[25px]   sm:px-[25px] sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px]  2xl:w-[1200px] 2xl:gap-[100px]'>

                <div className='  bg-slate-200 rounded-lg '>


                    <div className='   '>
                        <div className='w-[100%] flex justify-between secondary-bg rounded-lg'>
                            <div className='p-2 '>
                                <p className='text-[18px] md:text-[20px] lg:text-[22px] text-white '>Admin Panel</p>
                            </div>

                            <div className='flex gap-[2px]'>
                                <div className='p-2  flex items-center'>
                                    <Bell size={21} className='text-white ' />
                                </div>
                                <div className='p-2  flex items-center gap-[3px]'>
                                    <div>
                                        <User size={21} className='text-white ' />
                                    </div>
                                    <div>
                                        <p className='text-white  font-thin text-[10px] md:text-[11px]'>John Doe</p>
                                    </div>

                                </div>
                            </div>



                        </div>
                    </div>

                    <div className=' bg-slate-200 rounded-lg'>

                        <div>
                            <div className='p-2 md:p-4'>
                                <p className='text-[16px] md:text-[18px] lg:text-[20px] '>Dashboard</p>
                            </div>
                        </div>

                        <div className='p-2 flex flex-wrap gap-2 justify-center'>
                            <div className='w-[140px] h-[70px] md:w-[160px] lg:w-[180px]  rounded-md p-2 bg-sky-500 flex flex-col justify-between'>
                                <div className=" ">
                                    <p className=' text-white text-[12px]'>ORDER PENDING</p>
                                </div>

                                <div>
                                    <div className=" ">
                                        <p className=' text-white'>7</p>
                                    </div>
                                </div>


                            </div>
                            <div className='w-[140px] h-[70px] md:w-[160px] lg:w-[180px] rounded-md p-2  bg-orange-500 flex flex-col justify-between'>
                                <div className=" ">
                                    <p className=' text-white text-[12px]'>ORDER CANCEL</p>
                                </div>

                                <div>
                                    <div className=" ">
                                        <p className=' text-white'>7</p>
                                    </div>
                                </div>


                            </div>
                            <div className='w-[140px] h-[70px] md:w-[160px] lg:w-[180px] rounded-md p-2 bg-sky-400 flex flex-col justify-between'>
                                <div className=" ">
                                    <p className=' text-white text-[12px]'>ORDER PROCESS</p>
                                </div>

                                <div>
                                    <div className=" ">
                                        <p className=' text-white'>7</p>
                                    </div>
                                </div>


                            </div>
                            <div className='w-[140px] h-[70px] md:w-[160px] lg:w-[180px] rounded-md p-2  bg-lime-600 flex flex-col justify-between'>
                                <div className=" ">
                                    <p className=' text-white text-[12px]'>TOTAL INCOME</p>
                                </div>

                                <div>
                                    <div className=" ">
                                        <p className=' text-white font-thin text-[15px]'>RS 7200/-</p>
                                    </div>
                                </div>


                            </div>
                        </div>


                    </div>


                    <div>

                        <div>
                            <div className='p-2 md:p-4'>
                                <p className='text-[16px] md:text-[18px] lg:text-[20px] '>Insert Products</p>
                            </div>
                        </div>

                        <div className='p-4 py-[10px] '>

                            <div className=' bg-slate-300 py-[10px] w-[100%] rounded-lg p-2 flex flex-wrap  lg:justify-center  gap-[10px] '>
                                <div className='flex gap-[4px] items-center'>
                                    <p className='text-[12px] md:text-[15px]'>Product Image</p>
                                    <input className=' text-[10px] md:text-[12px]' type="file" />
                                </div>
                                <div className='flex gap-[4px] items-center'>
                                    <p className='text-[12px]  md:text-[15px]'>Product Image 2</p>
                                    <input className=' text-[10px] md:text-[12px]' type="file" />
                                </div>
                                <div className='flex gap-[4px] items-center'>
                                    <p className='text-[12px]  md:text-[15px]'>Product Name</p>
                                    <input className=' text-[10px] px-[5px] md:text-[12px] rounded-md border-2 ' type="text" placeholder='Name' />
                                </div>
                                <div className='flex gap-[4px] items-center'>
                                    <p className='text-[12px]  md:text-[15px]'>Product Title</p>
                                    <input className=' text-[10px] px-[5px] md:text-[12px] rounded-md border-2 ' type="text" placeholder='Title' />
                                </div>
                                <div className='flex gap-[4px] items-center'>
                                    <p className='text-[12px] md:text-[15px] '>Product SubTitle</p>
                                    <input className=' text-[10px] px-[5px] md:text-[12px] rounded-md border-2 ' type="text" placeholder='SubTitle' />
                                </div>
                                <div className='flex gap-[4px] items-center'>
                                    <p className='text-[12px]  md:text-[15px]'>Product Price</p>
                                    <input className=' text-[10px] px-[5px] md:text-[12px] rounded-md border-2 ' type="text" placeholder='Price' />
                                </div>

                                <div>
                                   <Button className='w-[100px] h-[25px] text-[10px]' type="primary">Add New Product</Button>
                                </div>
                            </div>

                        </div>


                    </div>


                    <div>
                        <div>
                            <div className='p-2 md:p-4'>
                                <p className='text-[16px] md:text-[18px] lg:text-[20px] '>Orders</p>
                            </div>
                        </div>

                        <div>

                          

                           

                        </div>




                    </div>



                </div>
            </div>

        </div>
    )
}

export default Adminpanel