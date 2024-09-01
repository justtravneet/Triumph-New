import Cookies from 'js-cookie';

export const checkLogin = () => {
    const authToken = Cookies.get('authToken');
    if (authToken) {
        console.log("User is Logged In")
        return true

    } else {
        console.log("User is not Logged In")
        return false
    }
}

export const scheduleTokenRemoval = () => {
    const sixDaysInMs = 6 * 24 * 60 * 60 * 1000; // 6 days in milliseconds
  
    setTimeout(() => {
      Cookies.remove('authToken', { secure: true, sameSite: 'Strict' });
      alert('Your session is about to expire. Please log in again.');
    }, sixDaysInMs);
  };