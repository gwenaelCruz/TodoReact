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

        case constants.TOGGLE_TODO_ENDED:
            let todoToChange = state.todos[action.index];
            let newTodo = new Todo(todoToChange.title, todoToChange.description);
            newTodo.ended = action.ended;
            let todoList = state.todos.slice();
            todoList[action.index] = newTodo;
            return {
                ...state,
                todos: todoList
            };

        default:
            return state
    }
}