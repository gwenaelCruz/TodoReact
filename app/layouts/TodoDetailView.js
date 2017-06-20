
//Store Layouts from app (templates)

import React, { Component } from 'react';
import { View } from 'react-native';
import Toolbar from '../components/Toolbar';


export default class TodoDetailView extends Component {
    render() {
        const { params } = this.props.navigation.state;
        return(
            <View>
                <Toolbar title={params.title} />
                <Text>
                    {params.description}
                </Text>
            </View>
        );
    }
}

