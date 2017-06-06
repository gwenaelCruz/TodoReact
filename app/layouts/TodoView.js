
//Store Layouts from app (templates)

import React, { Component } from 'react';
const app = require('../');
const {
    List,
    Toolbar
} = app;
const MK = require('react-native-material-kit');
const {
    MKButton,
    MKColor
} = MK;

const Fab = MKButton.coloredFab()
    .withBackgroundColor(MKColor.Indigo)
    .build();

class AddTodoButton extends Component {
    handleClick() {
    }

    render() {
        return(
            <Fab onPress={(e) => this.handleClick(e)}>
                <Text> + </Text>
            </Fab>
        );
    }
}

export default class TodoView extends Component {
    render() {
        return(
            <Toolbar/>
        );
    }
}

