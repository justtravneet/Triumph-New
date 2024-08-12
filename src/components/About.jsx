import React from 'react'
import { motion, useScroll } from "framer-motion";
import Heroone from './Heroone';
import Herolast from './Herolast';
const About = () => {
    const { scrollYProgress } = useScroll();

    return (
        <div>

            <div>
                <Heroone />
            </div>
            <div className=' flex justify-center  px-[10px] sm:px-[25px]  md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:justify-center 2xl:gap-[100px]  '>
                 <div className='py-[20px] md:py-[20px]'>
                      <motion.img 
                      animate={{y:[-10,0,-10]}}
                      transition={{
                        times:[0,1],
                        duration:[5],
                        repeat:Infinity,
                        type:"keyframes"
                      }} 
                      className='w-[90px]  md:w-[100px] lg:w-[130px]' src="https://static.vecteezy.com/system/resources/previews/013/473/464/original/bulb-3d-render-png.png" alt="" />
                 </div>
            </div>
            <div className=' flex justify-center  px-[10px] sm:px-[25px]  md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:justify-center 2xl:gap-[100px]  '>
                <div className=' sm:flex  w-[100%] h-[auto] 2xl:w-[1200px] '>
                    <div className='center w-[100%] h-[auto]  py-[20px]'>
                        <div className='w-[90%] md:w-[80%] h-[auto] '>
                            <div className=''>
                                <img className='rounded-xl' src="https://img.freepik.com/free-photo/row-decorative-light-bulbs-hanging-cafe_181624-58119.jpg?t=st=1720294228~exp=1720297828~hmac=b1ba42277f8551db246c3de6e68f3de17dc37d835ed8da0ebacd4bfa8ba1fd30&w=740" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='center  sm:block  sm:p-6 w-[100%] h-[auto]  '>
                        <div className='w-[90%] md:w-[80%] h-[auto] '>
                            <div className='flex flex-col gap-[4px]'>
                                <p className='text-[20px]  lg:text-[23px] font-semibold'>About Us</p>
                                <div className='flex flex-col gap-[5px]'>
                                    <p className='text-[8px] md:text-[9px] lg:text-[12px] xl:text-[15px] 2xl:text-[16px]'>Established in 2001, Surya Electronics is an electronics retail chain based in Pune. Over the course of years, we have become a one-stop shop for all home and personal electronic needs, making us a reliable brand. Presently, 10 stores in Pune and 1 Store in Satara are dedicated for Customer Service.</p>
                                    <p className='text-[8px] md:text-[9px] lg:text-[11px]  xl:text-[15px] 2xl:text-[16px]'>The firm was established by Mr. Ramesh Choudhary with a notion of providing excellent customer satisfaction through high level of commitment. In the journey of 20 years, we have reached some mind - blowing milestones – from a headcount of 2 helpers to 300+ team members and from shop floor of 200sq. ft. to 1 lac sq. ft.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='flex justify-center p-2 mt-[15px]'>
                <div className=' sm:flex  w-[100%] h-[auto] 2xl:w-[1200px] '>
                    <div className='center w-[100%] h-[auto] '>
                        <div className='w-[90%] md:w-[80%] h-[auto] '>
                            <div className=''>
                                <div className=''>
                                    <p className='text-[18px] font-semibold'>Affordable Prices</p>
                                </div>
                                <div className='rounded-md w-[100%] h-[15px] xl:h-[20px] bg-red-300'>
                                    <div className=' flex justify-end items-center rounded-md w-[85%] h-[15px] xl:h-[20px] bg-amber-500'>
                                        <p className='text-[12px] pr-[5px] xl:text-[16px] font-medium'>90%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className='flex justify-center p-2'>
                <div className=' sm:flex  w-[100%] h-[auto] 2xl:w-[1200px] '>
                    <div className='center w-[100%] h-[auto]  '>
                        <div className='w-[90%] md:w-[80%] h-[auto] '>
                            <div className=''>
                                <div className=''>
                                    <p className='text-[18px] font-semibold'>Products Quality</p>
                                </div>
                                <div className='rounded-md w-[100%] h-[15px] xl:h-[20px] bg-red-300'>
                                    <div className=' flex justify-end items-center rounded-md w-[90%] h-[15px] xl:h-[20px] bg-amber-500'>
                                        <p className='text-[12px] pr-[5px] xl:text-[16px] font-medium'>95%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className=' flex justify-center  px-[10px] sm:px-[25px]  md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:justify-center 2xl:gap-[100px]  '>
                <div className=' sm:flex  w-[100%] h-[auto] 2xl:w-[1200px] mt-[20px]'>
                    
                    <div className='center  sm:block  sm:p-8 w-[100%] h-[auto]  '>
                        <div className='w-[90%] md:w-[80%] h-[auto] '>
                            <div className='flex flex-col gap-[4px]'>
                                <p className='text-[20px]  lg:text-[23px] font-semibold'>Is my payment secure?</p>
                                <div className='flex flex-col gap-[5px]'>
                                    <p className='text-[8px] md:text-[9px] lg:text-[12px] xl:text-[15px] 2xl:text-[16px]'>We work to protect the security of your payment information during transmission by using encryption protocols and software. We follow the Payment Card Industry Data Security Standard (PCI DSS) when handling payment card data.</p>
                                    <p className='text-[8px] md:text-[9px] lg:text-[11px]  xl:text-[15px] 2xl:text-[16px]'></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='center w-[100%] h-[auto]  py-[20px]'>
                        <div className='w-[90%] md:w-[80%] h-[auto] '>
                            <div className=''>
                                <img className='rounded-xl' src="https://img.freepik.com/free-photo/row-decorative-light-bulbs-hanging-cafe_181624-58119.jpg?t=st=1720294228~exp=1720297828~hmac=b1ba42277f8551db246c3de6e68f3de17dc37d835ed8da0ebacd4bfa8ba1fd30&w=740" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className=' flex justify-center  px-[10px] sm:px-[25px]  md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:justify-center 2xl:gap-[100px]  '>
                <div className=' sm:flex  w-[100%] h-[auto] 2xl:w-[1200px] mt-[20px]'>
                    
                    <div className='center  sm:block  sm:p-8 w-[100%] h-[auto]  '>
                        <div className='w-[90%] md:w-[80%] h-[auto] '>
                            <div className='flex flex-col gap-[4px]'>
                                <p className='text-[20px]  lg:text-[23px] font-semibold'>Is my payment secure?</p>
                                <div className='flex flex-col gap-[5px]'>
                                    <p className='text-[8px] md:text-[9px] lg:text-[12px] xl:text-[15px] 2xl:text-[16px]'>We work to protect the security of your payment information during transmission by using encryption protocols and software. We follow the Payment Card Industry Data Security Standard (PCI DSS) when handling payment card data.</p>
                                    <p className='text-[8px] md:text-[9px] lg:text-[11px]  xl:text-[15px] 2xl:text-[16px]'></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='center w-[100%] h-[auto]  py-[20px]'>
                        <div className='w-[90%] md:w-[80%] h-[auto] '>
                            <div>
                                <img className='rounded-xl' src="https://img.freepik.com/free-photo/row-decorative-light-bulbs-hanging-cafe_181624-58119.jpg?t=st=1720294228~exp=1720297828~hmac=b1ba42277f8551db246c3de6e68f3de17dc37d835ed8da0ebacd4bfa8ba1fd30&w=740" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>


 
          <div>
            <Herolast />
          </div>

        </div>
    )
}

export default About