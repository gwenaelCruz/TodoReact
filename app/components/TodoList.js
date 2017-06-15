
import React, { Component } from 'react';
import {
    Alert,
    ListView,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import styles from '../config/styles';

class TodoListView extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.todos)
        };
    }

    _onPressTodo(rowData) {
        //Todo: Open a new view to show item
        //Alert.alert(rowData.title);
    }

    componentWillReceiveProps(props) {
        this.setState({
           dataSource: this.state.dataSource.cloneWithRows(props.todos)
        });
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

const mapStateProps= (state) => {
    return {
        todos: state.todoReducer.todos
    }
};

const TodoList = connect(
    mapStateProps
)(TodoListView);

export default TodoList;


