import React from 'react';
import { View,Image,Dimensions,StyleSheet,TouchableOpacity,ImageBackground} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Container, Header, Item, Input, Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
export default UserNavBar = (props)=>{
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.header}
        >
        <ImageBackground style={{ flex: 1,paddingHorizontal: 15}}
        source={require('../assets/blueBk.jpg')}>
            <View style={styles.headerUser}>
                <Icon name="users" style={{color:'#fff'}}></Icon>
                <Text style={{marginHorizontal: 10}}>吃鸡小组</Text>
                <Image
                    source={{uri: 'profile_level1'}}
                    style={{width: 36, height: 15}}
                />
            </View>
            <Image
                source={{uri: 'arrow_right'}}
                style={{width: 7, height: 12}}
            />
        </ImageBackground>

      </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerUser: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
  },
});