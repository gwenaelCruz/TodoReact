import constants from '../config/constants';

export function openTodoDialog() {
    return {
        type: constants.OPEN_CREATE_DIALOG
    }
}

export function addTodo(title, description) {
    return {
        type: constants.ADD_TODO,
        title: title,
        description: description
    }
}

