import React, { useState, useEffect } from 'react';

// Email validation function
const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Mock OTP value for testing
const MOCK_OTP = '123456';
const NEW_OTP = '654321'; // New OTP for demo purposes

const Login = () => {
  const [email, setEmail] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [error, setError] = useState('');
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [countdown, setCountdown] = useState(30); // Countdown for resend OTP
  
  console.log({email})
  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown]);

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(''); // Clear error when user starts typing
  };

  // Verify email on button click
  const handleVerifyEmail = () => {
    if (email.trim() === '') {
      setError('Email field cannot be empty');
      setIsEmailVerified(false);
    } else if (isValidEmail(email)) {
      setIsEmailVerified(true);
      setError('');
      console.log(`Generated OTP: ${MOCK_OTP}`); // For debugging purposes
      setCountdown(30); // Reset countdown for OTP resend
    } else {
      setError('Invalid email format');
      setIsEmailVerified(false);
    }
  };

  // Handle OTP input change
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    setOtpError(''); // Clear OTP error when user starts typing
  };

  // Verify OTP on button click
  const handleVerifyOtp = () => {
    if (otp === MOCK_OTP) {
      setOtpVerified(true);
      setOtpError('');
    } else {
      setOtpError('Invalid OTP');
      setOtpVerified(false);
    }
  };

  // Request new OTP
  const handleRequestNewOtp = () => {
    console.log(`Resent OTP: ${NEW_OTP}`); // For debugging purposes
    setOtp(''); // Clear the current OTP
    setOtpError(''); // Clear any existing OTP error
    setCountdown(30); // Reset countdown for OTP resend
  };

  // Handle back button click
  const handleBackToEmail = () => {
    setIsEmailVerified(false);
    setOtpVerified(false);
    setOtp('');
  };

  const handleapi = async (e) =>{

    e.preventDefault();

   const result = await axios.post('https://e-commerce-backend-2ndq.onrender.com/api/v1/' ,{
        email:email,
    })
    console.log(result.data)
    

    console.log({ email,password })
  }

  return (
    <div className="flex items-center justify-center  p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg px-[10px]">
        {/* Conditionally render email verification section */}
        {!isEmailVerified && (
          <div>
            <p className="text-xl font-semibold text-center mb-6">Email Verification</p>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                aria-describedby="email-error"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              onClick={handleVerifyEmail}
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              NEXT
            </button>
            {error && <p id="email-error" className="mt-2 text-red-600 text-center">{error}</p>}
          </div>
        )}

        {/* Conditionally render OTP section */}
        {isEmailVerified && !otpVerified && (
          <div>
            <h2 className="text-xl font-semibold text-center mb-6">OTP Authentication</h2>
            <div className="mb-4">
              <input
                type="text"
                value={otp}
                onChange={handleOtpChange}
                placeholder="Enter OTP"
                aria-describedby="otp-error"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              onClick={handleVerifyOtp}
              className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Verify OTP
            </button>
            <button
              onClick={handleBackToEmail}
              className="w-full mt-2 py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Back
            </button>
            {otpError && <p id="otp-error" className="mt-2 text-red-600 text-center">{otpError}</p>}
            {countdown > 0 ? (
              <p className="mt-4 text-center text-gray-600">Resend OTP in {countdown}s</p>
            ) : (
              <p
                className="mt-4 text-center text-indigo-600 cursor-pointer hover:text-indigo-700"
                onClick={handleRequestNewOtp}
              >
                Request New OTP
              </p>
            )}
          </div>
        )}

        {/* Conditionally render success section */}
        {isEmailVerified && otpVerified && (
          <div >
            <h2 className="text-xl font-semibold text-center mb-6">Welcome!</h2>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
