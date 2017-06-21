
//Store Layouts from app (templates)

import React, { Component } from 'react';
import { View } from 'react-native';


export default class TodoDetailView extends Component {
    render() {
        const { params } = this.props.navigation.state;
        return(
            <View>
                <Text>
                    {params.description}
                </Text>
            </View>
        );
    }
}

