import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function todoStore() {
    return createStore(rootReducer);
}