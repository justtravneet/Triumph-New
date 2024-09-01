import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AlertModal = ({ message, visible, onClose }) => {
    if (!visible) return null; // Do not render if not visible

    return (
        <div
            role="dialog"
            aria-labelledby="alert-modal-title"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
        >
            <div className="relative bg-white w-full border-r-8 border-blue-600 border-l-8  max-w-sm px-6 py-4 shadow-lg rounded-2xl transform transition-transform duration-300 ease-in-out">
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition-colors duration-200"
                >
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                </button>
                <p id="alert-modal-title" className="text-center text-blue-800 text-lg font-semibold">{message}</p>
            </div>
        </div>
    );
};

export default AlertModal;
