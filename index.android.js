/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ListView,
    Text,
    View
} from 'react-native';
const MK = require('react-native-material-kit');
const {
    MKButton,
    MKColor
} = MK;

const app = require('./app/index');
const {
    classes,
    images,
    routes,
    settings,
    styles,
    layouts
} = app;


class App extends Component {
    render() {
        return (
            <View>
                <TodoView/>
            </View>
        );
  }
}


AppRegistry.registerComponent('TodoReact', () => App);
