import React from 'react'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
const Moreproducts = () => {
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
    <div >
        <div className='card-backs  flex 2xl:justify-center pl-[5px] py-[20px] gap-[15px]'>
                   {data.map((d) => (
                      <Link to="Triumph/Product-details">
                        <div className='card-conatiner  w-[150px] h-[280px] lg:w-[190px] lg:h-[300px] bg-slate-100 flex flex-col justify-between'>
                             <div className='class-imageholder w-[150px] h-[150px] lg:w-[190px] lg:h-[150px]'>
                                   <img className='hoverimages h-[100%] w-[100%]' src={d.image} alt="" />
                             </div>

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
  )
}

export default Moreproducts