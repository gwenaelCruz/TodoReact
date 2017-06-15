import constants from '../config/constants';
import Todo from '../classes/Todo';

const initialState = {
    todos: [
        new Todo('Test1', ''),
        new Todo('Test2', ''),
        new Todo('Test3', ''),
        new Todo('Test4', ''),
        new Todo('Test5', ''),
        new Todo('Test6', ''),
        new Todo('Test7', ''),
        new Todo('Test8', ''),
    ]
};

export default function todoReducer(state = initialState, action) {
    switch(action.type) {

        case constants.ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat(new Todo(action.title, action.description))
            };

        default:
            return state
    }
}