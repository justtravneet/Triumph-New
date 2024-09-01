import axios from "axios";

const apiUrl = import.meta.env.VITE_URL;

export const validateToken = async (token,url) => {
    try {
        const response = await axios.get(`${url}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log(response.data.message)
        return response.data
    } catch (error) {
        console.error(error);
    }
}


export const validateCartToken = async (token) => {
    try {
        const response = await axios.get(`${apiUrl}/user/cart`, {
            headers: {
                'cart-token': `${token}`
            }
        });
        return response
    } catch (error) {
        console.error(error);
    }
}
