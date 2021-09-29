import {combineReducers} from 'redux'
import signupReducer from './signupReducer'
import loginReducer from './loginReducer'
import productReducer from './productReducer';
import cartReducer from './cartReducer';

export default combineReducers({
    auth: loginReducer,
    signupReducer,
    productReducer,
    cartReducer,
});