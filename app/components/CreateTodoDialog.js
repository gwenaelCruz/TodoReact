
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
    state = {
        modalVisible: false,
        title: '',
        description: ''
    }

    setDialogVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => { }}
            >
                <TitleInput
                    onTextChange={(title) => this.state.title = title}
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
        visible: state.visible
    }
};

const CreateTodoDialog = connect(
    mapStateProps,
    mapDispatchToProps
)(Dialog);

export default CreateTodoDialog;