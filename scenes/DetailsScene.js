import React ,{Component} from 'react';
import {View} from 'react-native';
import {Button,Text} from 'native-base'
import {Actions} from 'react-native-router-flux'
export default class DetailsScene extends Component{
   render(){
       return (
         <View>
            <Text> DetailsScene</Text>
            <Button success onPress={()=>{ Actions.pop()}}><Text>返回上一页 </Text></Button>
         </View>
       )
  }
}