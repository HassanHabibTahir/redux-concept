import { combineReducers } from 'redux';
import Todo from '../todoReducer';
import User from '../userReducer';


const rootReducer = combineReducers({
    Todo,
    User
})
export default rootReducer;