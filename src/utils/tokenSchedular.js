import { checkLogin } from "./checkLogin";

const checkAndRemoveCartToken = () => {
    const isLogin = checkLogin()
    if (!isLogin) {
        localStorage.removeItem('cartToken');
        console.log('Cart Token is Removed');
    }
};

const getTimeUntilMidnight = () => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0); // Set to next midnight
    return midnight - now;
};

export const initializeScheduler = () => {
    // Run the check immediately
    checkAndRemoveCartToken();

    // Schedule to run at midnight every day
    const timeUntilMidnight = getTimeUntilMidnight();
    setTimeout(() => {
        checkAndRemoveCartToken(); // Run at midnight
        setInterval(checkAndRemoveCartToken, 24 * 60 * 60 * 1000); // Continue to run every 24 hours
    }, timeUntilMidnight);
};


