import React from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body,Right} from 'native-base';
import TimeAgo from 'react-native-timeago';
let moment = require('moment'); //load moment module to set local language
require('moment/locale/zh-cn'); //for import moment local language file during the application build
moment.locale('zh-cn');//set moment local language to zh-cn
import FitImage from 'react-native-fit-image';

export default  FlatIndexProducts = props=>{
  console.log("222",props)
    const {details,id,name,pImage,pLocal,pNumber,price,produceTime} = props;
    return (
      <Card style={{flex: 0}} >
          <CardItem>
            <Left>
              <Thumbnail source={{uri: pImage}} />
              <Body>
                <Text>产品名称：{name}</Text>
                <Text note> 生产日期:{produceTime}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
              <FitImage
              source={{ uri: pImage }}
              originalWidth={400}
              originalHeight={400}
              />
          </CardItem>
          <CardItem>
            <Body>
              <Text numberOfLines={2}>
                {details}
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="md-business" />
                <Text>价格：{price.number}</Text>
              </Button>
            </Left>
            <Left>
                <Icon name="ios-locate" />
                <Text>源产地：{pLocal}</Text>
            </Left>
            <Right>
                <Text>库存数量：{pNumber}</Text>
              </Right>
          </CardItem>
        </Card>
    )
}