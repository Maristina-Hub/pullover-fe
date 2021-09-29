import types from '../types';

const initialState = {
    data: [],
};

const productReducer = (state=initialState, action) => {
    const {type} = action;
    switch(type) {
        case types.GET_PRODUCT:
            return {...state, data:action.data};
        case types.CREATE_PRODUCT:
            return {...state, data:action.data};
        case types.EDIT_PRODUCT:
            return {...state, data:action.data};
        case types.DELETE_PRODUCT:
            return {...state, data:action.data};
        default:
            return state;
    }
};

export default productReducer;