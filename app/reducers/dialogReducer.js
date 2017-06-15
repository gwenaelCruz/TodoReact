import constants from '../config/constants';

const initialState = {
    visible: false
};

export default function dialogReducer(state = initialState, action) {
    switch(action.type) {
        case constants.OPEN_CREATE_DIALOG: {
            return state.visible = true;
        }

        default:
            return state
    }
}