import constants from '../config/constants';
import Todo from '../classes/Todo';

const initialState = {
    todos: []
};

export default function todoReducer(state = initialState, action) {
    switch(action.type) {
        case constants.OPEN_CREATE_DIALOG: {
            return state
        }

        case constants.ADD_TODO:
            return state.todos.push(
                new Todo(action.title, action.description)
            );

        default:
            return state
    }
}