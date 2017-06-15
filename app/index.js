// Import every other, entry point of the application
import React, { Component } from 'react';
import {
    View,
    StatusBar
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';
import TodoView from './layouts/TodoView';

import Colors from './config/colors';

let store = createStore(rootReducer);

const App = (props) => (
    <View>
        <View>
            <StatusBar backgroundColor={Colors.darkIndigo} />
        </View>
        <Provider store={store}>
            <TodoView/>
        </Provider>
    </View>

);

export default App;