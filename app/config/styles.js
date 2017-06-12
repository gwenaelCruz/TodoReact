import React, { Component } from 'react';
import { StyleSheet } from "react-native";
const MK = require('react-native-material-kit');
const {
    MKColor
} = MK;
import Colors from './colors';

const styles = StyleSheet.create({
    toolbar: {
        height: 60,
        backgroundColor: MKColor.Indigo,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: Colors.white,
        fontSize: 18
    },
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: Colors.white,
    },
    listItem: {
        height: 50,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.lightgrey
    },
    listItemTitle: {
        fontWeight: 'bold',
        left: 10
    },
    fixedActionButton: {
        bottom: 1,
        right: 5,
        alignSelf: 'flex-end',
        flex: 1
    }
});

export default styles;