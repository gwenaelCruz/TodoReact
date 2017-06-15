import constants from '../config/constants';

export function toggleTodoDialog(visibility) {
    return {
        type: constants.TOGGLE_CREATE_DIALOG,
        visibility: visibility
    }
}