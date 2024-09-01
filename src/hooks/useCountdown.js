import { useEffect, useState } from "react";

export const useCountdown = (initialTime, isEmailVerified) => {
    const [countdown, setCountdown] = useState(initialTime);
  
    useEffect(() => {
      if (isEmailVerified && countdown > 0) {
        const timer = setInterval(() => {
          setCountdown(prev => prev - 1);
        }, 1000);
        
        return () => clearInterval(timer);
      }
    }, [countdown, isEmailVerified]);
  
    return countdown;
  };
  