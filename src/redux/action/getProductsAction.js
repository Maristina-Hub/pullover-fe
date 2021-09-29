import types from "../../types"
import axios from 'axios';
import { config } from '../../../config';

const { BASEURL } = config;

const getProducts = (data) => ({
    type: types.GET_PRODUCTS,
    data: data
});

export const getProductsAsync = () => async (dispatch) => {
    try {
        const response = await axios.get(`${BASEURL}/products`);
        const data = await response.json();
        dispatch(getProducts(data));  
    } catch (error) {
        console.log(error);
    }
};