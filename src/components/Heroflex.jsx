import React from 'react'

const Heroflex = () => {
    return (
        <div>
            <div className='sm:flex sm:justify-center gap-[5px]   px-[10px] py-[5px] sm:px-[25px] sm:py-[5px] md:px-[35px] lg:px-[65px] xl:px-[100px] 2xl:justify-center '>
                <div className='w-[100%] h-[200px] sm:h-[400px] xl:w-[600px] bg-slate-400'>
                    <img className='w-[100%] h-[100%]  object-cover' src="https://static.vecteezy.com/system/resources/previews/000/664/751/original/vector-abstract-low-poly-banner-design.jpg" alt="" />
                </div>
                <div className='w-[100%] h-[210px] xl:w-[600px] '>
                    <div className='w-[100%] h-[200px] bg-slate-950'>
                        <img className='w-[100%] h-[100%]  object-cover' src="https://img.freepik.com/premium-vector/banner-template-electronic-products_279069-536.jpg" alt="" />
                    </div>
                    <div className='w-[100%] h-[200px] bg-slate-500 '>
                        <img className='w-[100%] h-[100%]  object-cover' src="https://th.bing.com/th/id/OIP.NtTklDsASDzb92YyZnHiSgHaEK?w=996&h=560&rs=1&pid=ImgDetMain" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heroflex