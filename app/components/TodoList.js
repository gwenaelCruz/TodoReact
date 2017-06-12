
import React, { Component } from 'react';
import {
    ListView,
    Text,
    View
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
                new Todo('Test2', '')
            ])
        };
    }

    render() {
        return(
            <View style={styles.container}>
                <ListView
                    dataSource={ this.state.dataSource }
                    renderRow={ (rowData) =>
                        <View style={styles.listItem}>
                            <Text style={styles.listItemTitle}>{rowData.title}</Text>
                        </View>
                    }
                />
            </View>
        )
    }
};