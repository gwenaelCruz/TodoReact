// Import every other, entry point of the application
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';
import TodoView from './layouts/TodoView';

let store = createStore(rootReducer);

const App = (props) => (
    <Provider store={store}>
        <TodoView/>
    </Provider>

);

export default App;