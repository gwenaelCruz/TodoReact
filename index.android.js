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
import mainStyle from './src/styles/MainStyle'

class ToolBar extends Component {
    render() {
    return (
        <View style={mainStyle.toolbar}>
            <Text>
                TodoReact
            </Text>
        </View>
    );
  }
}

class TodoList extends Component {
    constructor(props) {
        super(props)
        const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: dataSource.cloneWithRows([
                'Test1', 'Test2'
            ])
        };
  }

    render() {
        return (
            <View>
                <ListView
                    dataSource={ this.state.dataSource }
                    renderRow={ (rowData) => <Text>{rowData}</Text> }
                />
            </View>
        );
  }
}


AppRegistry.registerComponent('TodoReact', () => ToolBar);
//AppRegistry.registerComponent('TodoReact', () => TodoList);
