import React from 'react'

const Modal = () => {

  return (
    <div className='fixed    bg-white bg-opacity-30 backdrop-blur-sm'>
         <div className='modal-back'>
             <div className='modal-conatiner text-center w-[200px] h-[200px] bg-slate-400'>
                
                <div>
                    modal
                </div>
                <div>
                   <button  className='bg-white py-[10px] px-[10px]'>+</button> 
                </div>
             </div>
         </div>
    </div>
  )
}

export default Modal