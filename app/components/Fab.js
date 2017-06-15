
import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import { connect } from 'react-redux';
const MK = require('react-native-material-kit');
const {
    MKButton,
    MKColor
} = MK;

import { toggleTodoDialog } from '../actions/DialogAction';
import styles from '../config/styles';
import images from '../config/images';

class FabAddView extends Component {

    render() {
        return(
            <View style={styles.fixedActionButton}>
                <MKButton
                    fab={true}
                    backgroundColor={MKColor.Indigo}
                    onPress={(e) => this.props.handleClick()}
                >
                    <Image source={ images.icons.plus } />
                </MKButton>
            </View>
        );
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(toggleTodoDialog(true))
        }
    }
};

const FabAdd = connect(
    null,
    mapDispatchProps
)(FabAddView);

export default FabAdd;