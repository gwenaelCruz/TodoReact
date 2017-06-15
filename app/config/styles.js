import React, { Component } from 'react';
import { StyleSheet } from "react-native";
const Dimensions = require('Dimensions');
const MK = require('react-native-material-kit');
const {
    MKColor
} = MK;
import Colors from './colors';

const { width, height } = Dimensions.get('window');
const toolbarHeight = 60;
const containerHeight = height - toolbarHeight;

const styles = StyleSheet.create({
    toolbar: {
        height: toolbarHeight,
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
        height: containerHeight
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
    fixedActionButtonContainer: {
        bottom: 50,
        right: 20,
        position: 'absolute'
    },
    fixedActionButton: {
        height: 55,
        width: 55,
        paddingTop:10,
        paddingLeft: 10
    },
    fixedActionIcon: {
        height:35,
        width:35
    },
    dialogContainer: {
        marginTop: 100,
        alignSelf: 'center',
        width: '75%',
        backgroundColor: Colors.white
    },
    dialogButtonsContainer: {
        marginTop: 15,
        flexDirection: 'row',
        alignSelf: 'flex-end'
    }
});

export default styles;