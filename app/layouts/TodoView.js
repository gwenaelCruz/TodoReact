
//Store Layouts from app (templates)

import React, { Component } from 'react';
import { View,StatusBar } from 'react-native';
import CreateTodoDialog from '../components/CreateTodoDialog';
import FabAdd from '../components/Fab';
import TodoList from '../components/TodoList';
import Colors from '../config/colors';

export default class TodoView extends Component {
    render() {
        return(
            <View>
                <StatusBar backgroundColor={Colors.darkIndigo} />
                <TodoList/>
                <FabAdd/>
                <CreateTodoDialog/>
            </View>
        );
    }
}

