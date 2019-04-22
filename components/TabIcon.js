import React from 'react';
import {View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabIcon = props=>{
    return (
        <Icon
        name  = {props.iconName || 'circle'}
        size  = {16}
        style = {{color:props.focused ? 'red' : 'rgb(3,102,214)'}}
        />
    )
}

export default TabIcon;