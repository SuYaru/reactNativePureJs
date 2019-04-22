import React from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import TimeAgo from 'react-native-timeago';
let moment = require('moment'); //load moment module to set local language
require('moment/locale/zh-cn'); //for import moment local language file during the application build
moment.locale('zh-cn');//set moment local language to zh-cn
import FitImage from 'react-native-fit-image';
export default  FlatListItem = props=>{
    console.log(props);
    const {name,userImage,text,time,star,start} = props;
    return (

      <Card style={{flex: 0}}>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: userImage}} />
              <Body>
                <Text>{name}</Text>
                <Text note> <TimeAgo time={time} /></Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
              <FitImage
              source={{ uri: userImage }}
              originalWidth={400}
              originalHeight={400}
              />
          </CardItem>
          <CardItem>
            <Body>

              <Text numberOfLines={2}>
                {text}
              </Text>

            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="logo-github" />
                <Text>{start.number}</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
    )
}