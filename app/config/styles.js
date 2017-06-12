/**
 * Created by DEVAPPLI on 31/05/2017.
 */

/**
 * Created by DEVAPPLI on 30/05/2017.
 */

import React, { Component } from 'react';
import { StyleSheet } from "react-native";
const MK = require('react-native-material-kit');
const {
    MKColor
} = MK;
import Colors from './colors';

const styles = StyleSheet.create({
    toolbar: {
        height: 50,
        backgroundColor: MKColor.Indigo,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: Colors.white,
        fontSize: 18
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.white,
    },
    listItem: {
        height: 40,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: MKColor.Grey
    },
    fixedActionButton: {

    }
});

export default styles;