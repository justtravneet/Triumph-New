import React from 'react'
import { Select, Space } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';

const Search = () => {

    const data = [
        {
            name: "Boat Heaphones",
            title: "Rounded surface with SOFT CUSHIONS",
            image: "https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price: "Rs.000/-",
        },
        {
            name: "Boat Heaphones",
            title: "Rounded surface with SOFT CUSHIONS",
            image: "https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price: "Rs.000/-",
        },
        {
            name: "Boat Heaphones",
            title: "Rounded surface with SOFT CUSHIONS",
            image: "https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price: "Rs.000/-",
        },
        {
            name: "Boat Heaphones",
            title: "Rounded surface with SOFT CUSHIONS",
            image: "https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price: "Rs.000/-",
        },
        {
            name: "Boat Heaphones",
            title: "Rounded surface with SOFT CUSHIONS",
            image: "https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price: "Rs.000/-",
        },
        {
            name: "Boat Heaphones",
            title: "Rounded surface with SOFT CUSHIONS",
            image: "https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price: "Rs.000/-",
        },
        {
            name: "Boat Heaphones",
            title: "Rounded surface with SOFT CUSHIONS",
            image: "https://i.pinimg.com/originals/9e/e0/ed/9ee0ed3fd1380ccd7ded429b56c1d8b3.jpg",
            price: "Rs.000/-",
        },





    ]


    return (
        <div className='  px-[10px] py-[5px] sm:px-[25px] sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px] xl:justify-center flex 2xl:justify-center 2xl:gap-[100px]'>
            






            <div className='desktopsearch w-[700px] md:w-[1000px] lg:w-[1200px] h-[auto] flex '>

                <div className='filterpanel w-[30%] sm:w-[20%] md:w-[20%] h-[auto]  px-[8px] py-[5px] flex flex-col gap-[10px]'>
                    <div>
                        <Select
                            defaultValue="Color"
                            style={{ width: 120 }}

                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                                { value: 'disabled', label: 'Disabled', disabled: true },
                            ]}
                        />
                    </div>

                    <div>
                        <Select
                            defaultValue="Lights"
                            style={{ width: 120 }}

                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                                { value: 'disabled', label: 'Disabled', disabled: true },
                            ]}
                        />
                    </div>

                </div>

                <div className=' w-[100%] h-[auto]'>
                    <div className='px-[10px] py-[5px]'>
                        <Input placeholder="Search For Lights" variant="filled" />
                    </div>


                    <div>

                        <div className=' justify-center w-[100%] h-[100%] flex  flex-wrap gap-[25px] px-[10px] py-[5px] '>
                            {data.map((d) => (
                            
                                <div className='cardconatiner-back  w-[150px] h-[290px] '>
                                    <div className='card-image-back w-[150px] h-[50px]'>
                                    <img className='hoverimages cart-images' src={d.image} alt="" />
                                    </div>
                                    <div className='info-back w-[150px] h-[100px] mt-[110px]   flex justify-between flex-col '>
                                        <div className='information w-[150px]  h-[100px] flex flex-col p-2'>
                                            <p className='text-[14px] font-medium'>{d.name}</p>
                                            <p className='text-[9px] font-light'>{d.title}</p>
                                            <div className='flex gap-[5px] items-center'>
                                                <div><p className='text-[12px] font-normal'>Color</p></div>
                                                <div><p className=' bg-gray-700 h-[10px] w-[10px] rounded-xl'></p></div>
                                                <div><p className=' bg-gray-100 h-[10px] w-[10px] rounded-xl'></p></div>
                                                <div><p className=' bg-gray-200 h-[10px] w-[10px] rounded-xl'></p></div>
                                            </div>
                                            <p className='text-[14px] font-semibold'>{d.price}</p>
                                        </div>


                                    </div>
                                    <div className='h-[30px] w-[150px] '>
                                        <Button className='button w-[100%] h-[100%] rounded-none' type="primary"><p className='text-[13px]'>View All</p></Button>
                                    </div>



                                </div>

                            

                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search