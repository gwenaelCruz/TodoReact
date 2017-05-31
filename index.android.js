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
import mainStyle from './app/styles/MainStyle';
import TodoView from './app/layouts/TodoView';

const app = require('./app/index');

const Fab = MKButton.coloredFab()
    .withBackgroundColor(MKColor.Indigo)
    .build();

class AddTodoButton extends Component {
    handleClick() {
    }

    render() {
        return(
            <Fab onPress={(e) => this.handleClick(e)}>
                <Text> + </Text>
            </Fab>
        );
    }
}

class App extends Component {
    render() {
        return (
            <View>
                <View style={mainStyle.toolbar}>
                    <Text style={mainStyle.title }>
                        TodoReact
                    </Text>
                </View>
                <TodoView/>
                <AddTodoButton/>
            </View>
        );
  }
}


AppRegistry.registerComponent('TodoReact', () => App);
