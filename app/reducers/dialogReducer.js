import constants from '../config/constants';

const initialState = {
    visible: false
};

export default function dialogReducer(state = initialState, action) {
    switch(action.type) {
        case constants.TOGGLE_CREATE_DIALOG:
            return Object.assign({}, state, {
                visible: action.visibility
            });

        default:
            return state
    }
}