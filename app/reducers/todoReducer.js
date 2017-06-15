import constants from '../config/constants';
import Todo from '../classes/Todo';

const initialState = {
    todos: []
};

export default function todoReducer(state = initialState, action) {
    switch(action.type) {

        case constants.ADD_TODO:
            if(action.title.trim().length == 0)
                return state;
            return {
                ...state,
                todos: state.todos.concat(new Todo(action.title, action.description))
            };

        default:
            return state
    }
}