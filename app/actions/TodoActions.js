import constants from '../config/constants';

export function addTodo(title, description) {
    return {
        type: constants.ADD_TODO,
        title: title,
        description: description
    }
}

