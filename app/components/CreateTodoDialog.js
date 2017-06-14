
import React, { Component } from 'react';
import {
    Modal,
    Text,
    View
} from 'react-native';

class CreateTodoDialog extends Component {
    state = {
        modalVisible: false,
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
                <Text>Hello !</Text>
            </Modal>
        );
    }
}

export default CreateTodoDialog;