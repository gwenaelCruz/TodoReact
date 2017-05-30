/**
 * Created by DEVAPPLI on 30/05/2017.
 */

import React, { Component } from 'react';
import { StyleSheet } from "react-native";

const mainStyle = StyleSheet.create({
    toolbar: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#283593',
        height: 55
    },
    title: {
        color: '#FFFFFF',
        fontSize: 18
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    todoBloc: {
        height: 50,
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        paddingLeft: 15,
        borderBottomColor: "#bdbdbd",
        borderBottomWidth: 1
    }

});

export default mainStyle;