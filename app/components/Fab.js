/**
 * Created by DEVAPPLI on 06/06/2017.
 */

import React, { Component } from 'react';
const MK = require('react-native-material-kit');
const {
    MKButton,
    MKColor
} = MK;

import styles from '../config/styles';

const Fab = MKButton.coloredFab()
    .withBackgroundColor(MKColor.Indigo)
    .build();

class FabAdd extends Component {
    handleClick() {
    }

    render() {
        return(
            <Fab onPress={(e) => this.handleClick(e)} style={styles.fixedActionButton}>
                <Text> + </Text>
            </Fab>
        );
    }
}

export default FabAdd;