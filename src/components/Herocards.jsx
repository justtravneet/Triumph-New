import React from 'react'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
 const  Herocards = () => {
    const data =[
        {
            name:"Boat Heaphones",
            title:"Rounded surface with SOFT CUSHIONS",
            image:"https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price:"Rs.000/-",   
        },
        {
            name:"Boat Heaphones",
            title:"Rounded surface with SOFT CUSHIONS",
            image:"https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price:"Rs.000/-",   
        },

        {
            name:"Boat Heaphones",
            title:"Rounded surface with SOFT CUSHIONS",
            image:"https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price:"Rs.000/-",   
        },
        {
            name:"Boat Heaphones",
            title:"Rounded surface with SOFT CUSHIONS",
            image:"https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price:"Rs.000/-",   
        },
        {
            name:"Boat Heaphones",
            title:"Rounded surface with SOFT CUSHIONS",
            image:"https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price:"Rs.000/-",   
        },
        {
            name:"Boat Heaphones",
            title:"Rounded surface with SOFT CUSHIONS",
            image:"https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price:"Rs.000/-",   
        },
        {
            name:"Boat Heaphones",
            title:"Rounded surface with SOFT CUSHIONS",
            image:"https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price:"Rs.000/-",   
        },
        
    ]
  return (
    <div>
        <div  className='  px-[10px] py-[5px] 2xl:flex 2xl:flex-col 2xl:items-center  sm:px-[25px] sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:px-[200px] '>
            <div className='flex justify-center py-[10px]'>
                <p className='text-[20px]  tracking-wider sm:text-[24px] lg:text-[26px] xl:text-[28px] font-regular'>Indoor Lights</p>
            </div>
             <div className='card-backs 2xl:w-[1200px]  flex 2xl:justify-center pl-[5px] py-[20px] gap-[15px]'>
                   {data.map((d) => (
                      <Link to="Product-details">
                        <div className='card-conatiner  w-[150px] h-[280px] lg:w-[190px] lg:h-[300px] bg-slate-100 flex flex-col justify-between'>
                             {/* <div className='class-imageholder w-[150px] h-[150px] lg:w-[190px] lg:h-[150px]'>
                                   <img className='hoverimages h-[100%] w-[100%]' src={d.image} alt="" />
                             </div> */}
                             <Link to={'/collections/item'} className="group   ">
                                 <div className="  overflow-hidden class-imageholder bg-slate-500 w-[150px] h-[150px] lg:w-[190px] lg:h-[150px]">
                                     <div className='pt-[-10px]'>
                                        <img 
                                         className=" transform transition-transform duration-500 ease-in-out group-hover:scale-110" 
                                         src={d.image} />
                                         
                                     </div>
                                     
                                  </div>
        
                             </Link>

                             <div className='w-[150px] h-[90px] lg:w-[190px] lg:h-[110px]   flex flex-col gap-[3px] justify-center'>
                                      <p className='text-[12px] ml-[10px] font-medium lg:text-[15px]'>{d.name}</p>
                                      <p className='text-[8px] ml-[10px] font-light lg:text-[9px]'>{d.title}</p>
                                      <div className='flex items-center gap-[5px]'>
                                         <div><p className='text-[12px] ml-[10px] font-medium lg:text-[13px]'>Color</p></div>
                                         <div className='first-color h-[10px] w-[10px]  bg-orange-300 rounded-xl'></div>
                                         <div className='first-color h-[10px] w-[10px]  bg-orange-500 rounded-xl'></div>
                                         
                                         <div className='first-color h-[10px] w-[10px]   bg-green-950 rounded-xl'></div>
                                         <div className='first-color h-[10px] w-[10px]  bg-orange-300 rounded-xl'></div>
                                      </div>
                                      <p className='text-[13px] ml-[10px] font-semibold lg:text-[14px]' >{d.price}</p>
                             </div>

                             <div className='button w-[150px] h-[30px] lg:w-[190px] lg:h-[30px] bg-slate-600 flex justify-center'>
                                     <button ><p className='text-[12px] font-medium  text-white'>View All</p></button>
                             </div>
                             
                        </div>
                     </Link>

                   ))}
             </div>
        </div>
        <div  className='  px-[10px] py-[5px] 2xl:flex 2xl:flex-col 2xl:items-center sm:px-[25px] sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:px-[200px] '>
            <div className='flex justify-center py-[10px]'>
                <p className='text-[20px]  tracking-wider sm:text-[24px] lg:text-[26px] xl:text-[28px] font-regular'>OutdoorLights</p>
            </div>
             <div className='card-backs 2xl:w-[1200px] flex 2xl:justify-center pl-[5px] py-[20px] gap-[15px]'>
                   {data.map((d) => (
                      <Link to="Product-details">
                        <div className='card-conatiner  w-[150px] h-[280px] lg:w-[190px] lg:h-[300px] bg-slate-100 flex flex-col justify-between'>
                        <Link to={'/collections/item'} className="group   ">
                                 <div className="  overflow-hidden class-imageholder bg-slate-500 w-[150px] h-[150px] lg:w-[190px] lg:h-[150px]">
                                     <div className='pt-[-10px]'>
                                        <img 
                                         className=" transform transition-transform duration-500 ease-in-out group-hover:scale-110" 
                                         src={d.image} />
                                         
                                     </div>
                                     
                                  </div>
        
                             </Link>


                             <div className='w-[150px] h-[90px] lg:w-[190px] lg:h-[110px]   flex flex-col gap-[3px] justify-center'>
                                      <p className='text-[12px] ml-[10px] font-medium lg:text-[15px]'>{d.name}</p>
                                      <p className='text-[8px] ml-[10px] font-light lg:text-[9px]'>{d.title}</p>
                                      <div className='flex items-center gap-[5px]'>
                                         <div><p className='text-[12px] ml-[10px] font-medium lg:text-[13px]'>Color</p></div>
                                         <div className='first-color h-[10px] w-[10px]  bg-orange-300 rounded-xl'></div>
                                         <div className='first-color h-[10px] w-[10px]  bg-orange-500 rounded-xl'></div>
                                         
                                         <div className='first-color h-[10px] w-[10px]   bg-green-950 rounded-xl'></div>
                                         <div className='first-color h-[10px] w-[10px]  bg-orange-300 rounded-xl'></div>
                                      </div>
                                      <p className='text-[13px] ml-[10px] font-semibold lg:text-[14px]' >{d.price}</p>
                             </div>

                             <div className='button w-[150px] h-[30px] lg:w-[190px] lg:h-[30px] bg-slate-600 flex justify-center'>
                                     <button ><p className='text-[12px] font-medium  text-white'>View All</p></button>
                             </div>
                             
                        </div>
                     </Link>

                   ))}
             </div>
        </div>
    </div>
  )
}

export default Herocards