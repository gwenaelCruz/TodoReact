
import React, { Component } from 'react';
import {
    Modal,
    Text,
    View
} from 'react-native';
const MK = require('react-native-material-kit');
const {
    MKTextField
} = MK;

const TitleInput = MKTextField.textfieldWithFloatingLabel()
    .withPlaceholder('Title')
    .build();

class CreateTodoDialog extends Component {
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

export default CreateTodoDialog;