import React, { useState } from 'react'
import bulbOff from '/public/bulboff.png'
import bulbOn from '/public/bulbon.png'  
import { motion } from "framer-motion";
const Herothree = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleBulb = () => {
    setIsOn(!isOn);  
  };

  return (
    <div className='w-[100%] 2xl:flex 2xl:justify-center  primary-bg'>
      <div className='  px-[10px] py-[5px] sm:px-[25px]   sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px]  '>
        <div className=' flex  sm:items-center w-[100%] h-[200px] sm:h-[250px] 2xl:w-[1200px]  bg-slate-400'>
          <div className='flex flex-col justify-around p-1 sm:p-4 w-[50%] h-[200px] bg-slate-100 '>
            <p className=' tracking-wider text-[18px] sm:text-[22px] font-semibold '>Glow Your Room with Lights</p>
            <button   onClick={toggleBulb} className='py-[5px] px-[20px] w-[80%] sm:w-[50%] rounded-lg bg-slate-200'><p className='text-[15px] primary font-medium'>{isOn ? 'Turn On' : 'Turn Off'}</p></button>
          </div>
        

          <div className='w-[50%] h-[200px] flex '>
                <div  className='w-[100%] h-[200px] flex  justify-center items-center '> 
                     <motion.img  
                        animate={{y:[-10,0,-10]}}
                        transition={{
                          times:[0,1],
                          duration:[5],
                          repeat:Infinity,
                          type:"keyframes"
                        }} 
                      className='w-[140px] sm:w-[160px]' src={isOn ? bulbOn : bulbOff} alt="Bulb" />
                    
                </div>
          </div>
        </div>

       
      </div>
    </div>

  )
}

export default Herothree