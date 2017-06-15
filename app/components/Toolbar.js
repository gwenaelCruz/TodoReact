
import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import styles from '../config/styles';

export default class Toolbar extends Component {
    render(){
        return (
            <View style={styles.toolbar}>
                <Text style={styles.title }>
                    TodoReact
                </Text>
            </View>
        );
    }
}