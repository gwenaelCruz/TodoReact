// Import every other, entry point of the application
import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StackNavigator } from 'react-navigation';

import rootReducer from './reducers';
import routes from './config/routes';

let store = createStore(rootReducer);
const Navigator = StackNavigator(routes);

const App = (props) => (
    <Provider store={store}>
        <Navigator/>
    </Provider>
);

export default App;