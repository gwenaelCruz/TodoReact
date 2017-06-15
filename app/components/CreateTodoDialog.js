
import React, { Component } from 'react';
import {
    Modal,
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions/TodoActions';
const MK = require('react-native-material-kit');
const {
    MKTextField
} = MK;

const TitleInput = MKTextField.textfieldWithFloatingLabel()
    .withPlaceholder('Title')
    .build();

class Dialog extends Component {

    render() {
        return (
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.props.visible}
                onRequestClose={() => { }}
            >
                <TitleInput
                    onTextChange={(title) => this.props.title = title}
                />

            </Modal>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (title, description) => {
            dispatch(addTodo(title, description))
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