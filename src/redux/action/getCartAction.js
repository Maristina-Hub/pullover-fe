import types from "../types"
import { config } from '../../config';
import axios from 'axios';

const { BASEURL } = config;

const getCart = (data) => ({
    type: types.GET_CART, // thunk!
    data: data
}); // ACTION 

export const getcartAsync = () => async (dispatch) => {
    try {
        const response = await axios.get(`${BASEURL}/cart`);
        const data = await response.json();
        dispatch(getCart(data));        
    } catch (error) {
        console.log(error);
    }
}; // THUNK