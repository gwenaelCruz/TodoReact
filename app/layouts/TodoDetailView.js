
//Store Layouts from app (templates)

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from '../config/styles';

export default class TodoDetailView extends Component {
    render() {
        const { params } = this.props.navigation.state;
        return(
            <View style={Styles.container}>
                <Text style={Styles.todoDescription}>
                    {params.description}
                </Text>
            </View>
        );
    }
}

