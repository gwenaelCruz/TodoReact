
import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import Overlay from 'react-native-modal-overlay';
import { connect } from 'react-redux';
import validate from 'validate.js';
import { addTodo } from '../actions/TodoActions';
import { toggleTodoDialog } from '../actions/DialogAction';
const MK = require('react-native-material-kit');
const {
    MKButton,
    MKTextField,
    MKColor
} = MK;

import styles from '../config/styles';

//Inputs
const MaterialInput = MKTextField.textfieldWithFloatingLabel()
    .withStyle({width: '75%', marginLeft: 20})
    .build();

const CancelButton = MKButton.flatButton()
    .withTextStyle({
        color: MKColor.Indigo,
        fontWeight: 'bold'
    })
    .withText('CANCEL')
    .build();

const CreateButton = MKButton.flatButton()
    .withTextStyle({
        color: MKColor.Indigo,
        fontWeight: 'bold'
    })
    .withText('CREATE')
    .build();

// Form constraint
const constraints = {
    title: {
        presence: true,
        length: {
            minimum: 3,
            message: "must be at least 3 characters"
        }
    }
};


class Dialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            titleError: '',
            description: ''
        }
    }

    _resetState() {
        this.setState({
            title: '',
            titleError: '',
            description: ''
        });
    }

    _handleSubmit() {
        let values = {
            title: this.state.title,
            description: this.state.description
        };
        let invalid = validate(values, constraints);
        if(invalid) {
            this.setState({
                titleError: invalid.title[0]
            });
        } else {
            this._resetState();
            this.props.onSubmit(this.state.title, this.state.description);
        }
    }

    _cancel() {
        this._resetState();
        this.props.onCancel();
    }

    render() {
        return (
            <Overlay
                animationType={"fade"}
                closeOnTouchOutside
                containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.55)'}}
                visible={this.props.visible}
                onClose={() => { this._cancel() }}
            >
                <View style={styles.dialogContainer}>
                    <MaterialInput
                        placeholder="Title"
                        onChangeText={(title) => this.state.title = title}
                        onSubmitEditing={() => this.refs.DescriptionInput.focus()}
                    />
                    <Text>{this.state.titleError}</Text>
                    <MaterialInput
                        ref="DescriptionInput"
                        placeholder="Description"
                        onChangeText={(description) => this.state.description = description}
                        multiline={true}
                    />
                    <View style={styles.dialogButtonsContainer}>
                        <CancelButton
                            onPress={(e) => this._cancel()}
                        />
                        <CreateButton
                            onPress={(e) => this._handleSubmit()}
                        />
                    </View>
                </View>
            </Overlay>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (title, description) => {
            dispatch(addTodo(title, description))
            dispatch(toggleTodoDialog(false))
        },
        onCancel: () => {
            dispatch(toggleTodoDialog(false))
        }
    }
};

const mapStateProps = (state) => {
    return {
        visible: state.dialogReducer.visible
    }
};

const CreateTodoDialog = connect(
    mapStateProps,
    mapDispatchToProps
)(Dialog);

export default CreateTodoDialog;