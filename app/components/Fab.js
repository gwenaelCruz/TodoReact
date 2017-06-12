
import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
const MK = require('react-native-material-kit');
const {
    MKButton,
    MKColor
} = MK;

import styles from '../config/styles';
import images from '../config/images';

class FabAdd extends Component {
    handleClick() {
    }

    render() {
        return(
            <View style={styles.fixedActionButton}>
                <MKButton
                    fab={true}
                    backgroundColor={MKColor.Indigo}
                    onPress={(e) => this.handleClick()}
                >
                    <Image source={ images.icons.plus } />
                </MKButton>
            </View>
        );
    }
}

export default FabAdd;