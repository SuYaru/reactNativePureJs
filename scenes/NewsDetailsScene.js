import React ,{Component} from 'react';
import {View} from 'react-native';
import {Button,Text,Card, CardItem, Thumbnail, Icon, Left, Body} from 'native-base'
import TimeAgo from 'react-native-timeago';
import FitImage from 'react-native-fit-image';
import {Actions} from 'react-native-router-flux'
import { connect } from 'react-redux';
import axios from 'axios';
import { commonUrl } from '../actions';
export default class NewsDetailsScene extends Component{
  state={
    details:[]
  }
  componentDidMount=()=>{
      this.getNewsDetail(this.props.id)
  }
  getNewsDetail=(params)=>{
      axios({
        url:`${commonUrl.url}/news/${params}`,
        method:'get'
      }).then(res=>{
          this.setState({
              details:[res.data]
          })
      })
  }
   render(){
       return (
         <View>
            {
              this.state.details.map(val=>{
                return (
                  <Card style={{flex: 0}} key={val.id}>
                      <CardItem>
                        <Left>
                          <Thumbnail source={{uri: val.autImg}} />
                          <Body>
                            <Text>{val.title}</Text>
                            <Text note> <TimeAgo time={val.newDate} /></Text>
                          </Body>
                        </Left>
                      </CardItem>
                      <CardItem>
                          <FitImage
                          source={{ uri:val.newImg}}
                          originalWidth={400}
                          originalHeight={400}
                          />
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Text numberOfLines={2}>
                            {val.text}
                          </Text>
                        </Body>
                      </CardItem>
                      <CardItem>
                        <Left>
                          <Button transparent textStyle={{color: '#87838B'}}>
                            <Icon name="md-star" />
                            <Text>{val.star.number}</Text>
                          </Button>
                        </Left>
                      </CardItem>
                    </Card>
                )
              })
            }
         </View>
       )
  }
}
