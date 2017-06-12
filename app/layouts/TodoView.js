
//Store Layouts from app (templates)

import React, { Component } from 'react';
import { View } from 'react-native';
import Toolbar from '../components/Toolbar';
import FabAdd from '../components/Fab';
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

