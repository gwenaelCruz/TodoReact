/**
 * Created by DEVAPPLI on 06/06/2017.
 */

import React, { Component } from 'react';
const app = require('../../');
const {
    styles
} = app;
const Toolbarstyles = require('./styles');

export default class Toolbar extends Component {
    render(){
        return (<View style={Toolbarstyles.toolbar}>
            <Text style={styles.title }>
                TodoReact
            </Text>
        </View>);
    }
}