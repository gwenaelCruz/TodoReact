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
import mainStyle from './src/styles/MainStyle';
import TodoView from './src/layouts/TodoView';

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
            </View>
        );
  }
}


AppRegistry.registerComponent('TodoReact', () => App);
