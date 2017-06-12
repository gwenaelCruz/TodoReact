/**
 * Created by DEVAPPLI on 31/05/2017.
 */

/**
 * Created by DEVAPPLI on 30/05/2017.
 */

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
            <View>
                <ListView
                    dataSource={ this.state.dataSource }
                    renderRow={ (rowData) =>
                        <View style={styles.listItem}>
                            <Text>{rowData.title}</Text>
                        </View>
                    }
                />
            </View>
        )
    }
};