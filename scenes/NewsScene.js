import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import axios from 'axios';
import { commonUrl } from '../actions';
import {Actions} from 'react-native-router-flux'

export default class NewsScene extends Component {
    state={
        news:[]
    }
    getNews=()=>{
        axios({
            url:`${commonUrl.url}/news?_page=1&_limit=25`,
            method:'get',
            async:false
        }).then(res=>{
            //console.log(res.data);
            this.setState({
                news:res.data
            })
        });
    }

    componentDidMount=()=>{
        this.getNews();
    }
    render() {
        return (
        <Container>
            <Content>
                <List>
                {
                    this.state.news.map(val=>{
                        return (
                            <ListItem avatar key={val.id.toString()} onPress={()=>{Actions.newsDetailsScene({id:val.id})}}>
                                <Left>
                                    <Thumbnail source={{ uri:val.newImg}} />
                                </Left>
                                <Body>
                                    <Text>{val.title}</Text>
                                    <Text note>{val.text}</Text>
                                </Body>
                                <Right>
                                    <Text note>{val.newDate}</Text>
                                </Right>
                            </ListItem>
                        )
                    })
                }
                </List>
            </Content>
        </Container>
        );
    }
}