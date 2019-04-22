import React from 'react';
import { View,Image,Dimensions,StyleSheet} from 'react-native';
import { Text } from 'native-base';

export default NewsNavBar = (props)=>{
    return (
      <View
      style={{
        height         : 40,
        backgroundColor: 'transparent',
        justifyContent : 'center',
        alignItems     : 'center',
      }}
    >
      <Image source={require('../assets/blueBk.jpg')}
      style={{
        height  : 40,
        width   : Dimensions.get('window').width,
        position: 'absolute'
      }}
      ></Image>
      <Text style={{color:'white'}}>热点新闻</Text>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: '#fff',
  },
});