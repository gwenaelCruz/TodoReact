
//Store Layouts from app (templates)

import React, { Component } from 'react';
import { View } from 'react-native';
import CreateTodoDialog from '../components/CreateTodoDialog';
import FabAdd from '../components/Fab';
import Toolbar from '../components/Toolbar';
import TodoList from '../components/TodoList';


export default class TodoView extends Component {
    render() {
        return(
            <View>
                <Toolbar/>
                <TodoList/>
                <FabAdd/>
            </View>
        );
    }
}

