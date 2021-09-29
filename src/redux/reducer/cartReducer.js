import types from '../types';

const initialState = {
    data: [],
};

const cartReducer = (state=initialState, action) => {
    const {type} = action;
    switch(type) {
        case types.GET_CART:
            return {...state, data:action.data};
        case types.ADD_TO_CART:
            return {...state, data:action.data};
        case types.REMOVE_FROM_CART:
            return {...state, data:action.data};
        default:
            return state;
    }
};

export default cartReducer;