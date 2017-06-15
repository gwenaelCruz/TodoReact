
import React, { Component } from 'react';
import {
    Modal,
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions/TodoActions';
import { toggleTodoDialog } from '../actions/DialogAction';
const MK = require('react-native-material-kit');
const {
    MKButton,
    MKTextField,
    MKColor
} = MK;

const MaterialInput = MKTextField.textfieldWithFloatingLabel()
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

class Dialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }

    _handleSubmit() {
        this.props.onSubmit(this.state.title, this.state.description);
    }

    render() {
        return (
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.props.visible}
                onRequestClose={() => { }}
            >
                <MaterialInput
                    placeholder="Title"
                    onChangeText={(title) => this.state.title = title}
                    onSubmitEditing={() => this.refs.DescriptionInput.focus()}
                />
                <MaterialInput
                    ref="DescriptionInput"
                    placeholder="Description"
                    onChangeText={(description) => this.state.description = description}
                    multiline={true}
                />
                <CancelButton
                    onPress={(e) => this.props.onCancel()}
                />
                <CreateButton
                    onPress={(e) => this._handleSubmit()}
                />
            </Modal>
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