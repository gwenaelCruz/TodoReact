import constants from '../config/constants';

export function addTodo(title, description) {
    return {
        type: constants.ADD_TODO,
        title: title,
        description: description
    }
}

export function toggleTodoEnded(index, ended) {
    return {
        type: constants.TOGGLE_TODO_ENDED,
        index: index,
        ended: ended
    }
}
