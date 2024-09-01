import React from "react";
import Login from "../Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faXmark } from "@fortawesome/free-solid-svg-icons";


const LoginModal = ({ onClose }) => {
    return (
        <div className='z-20 fixed inset-0  bottom-20 -top-20 md:-top-0 md:bottom-0 bg-black bg-opacity-30 backdrop-blur-sm'>
            <div className='modal-back shadow-lg '>
                <div className=' text-center w-[300px] md:w-96 h-[auto] sm:w-[300px] '>
                    <div className="rounded-md secondary-bg">
                    <div className='flex  p-4 justify-between '>
                        <p className='text-xl font-semibold text-white'>Login</p>
                        <button onClick={onClose} className='text-white text-[20px]'>
                            <p className='text-sm font-bold '><FontAwesomeIcon icon={faXmark}/></p>
                        </button>
                    </div>
                    <div className=' py-2'>
                        <Login onClose={onClose}/>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
