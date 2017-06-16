
import React, { Component } from 'react';
import {
    Alert,
    ListView,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { toggleTodoEnded } from '../actions/TodoActions';
import styles from '../config/styles';

const rowStyle = (ended) => {
    return ended ? styles.endedTodo : styles.listItemTitle;
};

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

    _onLongPress(rowData, rowId) {
        this.props.changeState(rowId, !rowData.ended);
    }

    componentWillReceiveProps(props) {
        alert(props.todos[0].ended)
        this.setState({
           dataSource: this.state.dataSource.cloneWithRows(props.todos)
        });
    }

    render() {
        return(
            <View style={styles.container}>
                <ListView
                    dataSource={ this.state.dataSource }
                    enableEmptySections={true}
                    renderRow={ (rowData, sectionID, rowID) =>
                        <TouchableHighlight
                            onPress={this._onPressTodo.bind(this, rowData)}
                            onLongPress={this._onLongPress.bind(this, rowData, rowID)}
                            underlayColor="grey"
                        >
                            <View style={styles.listItem}>
                                <Text style={rowStyle(rowData.ended) }
                                >{rowData.title}</Text>
                            </View>
                        </TouchableHighlight>
                    }
                />
            </View>
        )
    }
};

const mapStateProps = (state) => {
    return {
        todos: state.todoReducer.todos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeState: (index, ended) => {
            dispatch(toggleTodoEnded(index, ended))
        }
    }
};

const TodoList = connect(
    mapStateProps,
    mapDispatchToProps
)(TodoListView);

export default TodoList;


