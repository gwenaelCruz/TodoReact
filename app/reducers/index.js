import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import dialogReducer from './dialogReducer'

const rootReducer = combineReducers({
    todoReducer,
    dialogReducer
});

export default rootReducer;