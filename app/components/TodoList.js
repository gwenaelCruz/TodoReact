
import React, { Component } from 'react';
import {
    Alert,
    ListView,
    Text,
    TouchableHighlight,
    View,

} from 'react-native';

import Todo from '../classes/Todo';
import styles from '../config/styles';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: dataSource.cloneWithRows([
                new Todo('Test1', ''),
                new Todo('Test2', ''),
                new Todo('Test3', ''),
                new Todo('Test4', ''),
                new Todo('Test5', ''),
                new Todo('Test6', ''),
                new Todo('Test7', ''),
                new Todo('Test8', ''),
            ])
        };
    }

    _onPressTodo(rowData) {
        //Todo: Open a new view to show item
        //Alert.alert(rowData.title);
    }

    render() {
        return(
            <View style={styles.container}>
                <ListView
                dataSource={ this.state.dataSource }
                renderRow={ (rowData) =>
                        <TouchableHighlight
                            onPress={this._onPressTodo.bind(this, rowData)}
                            underlayColor="grey"
                        >
                            <View style={styles.listItem}>
                                <Text style={styles.listItemTitle}>{rowData.title}</Text>
                            </View>
                        </TouchableHighlight>
                    }
                />
            </View>

        )
    }
};