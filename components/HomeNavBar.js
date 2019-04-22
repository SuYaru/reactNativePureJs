import React from 'react';
import { View,Image,Dimensions,StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

export default HomeNavBar = (props)=>{
    return (
        <Header searchBar>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="搜索" />
            <Icon name="md-camera" onPress={()=>{ Actions.camera()}}/>
          </Item>
        </Header>
    )
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: '#fff',
  },
});