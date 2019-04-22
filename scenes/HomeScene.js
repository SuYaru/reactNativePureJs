import React ,{Component} from 'react';
import {View, AppRegistry,StyleSheet,Image,Dimensions,ScrollView,FlatList} from 'react-native'
import {Button,Text,Content, Card, CardItem, Thumbnail, Icon, Left, Body,List,ListItem } from 'native-base';
import {Actions} from 'react-native-router-flux'
import { connect } from 'react-redux';
import { increase,fetchList,commonUrl,getCarouselListData} from '../actions';
import Swiper from 'react-native-swiper';
import axios from 'axios';
import { FlatIndexNews,FlatIndexProducts}  from '../components'
const mapStateToProps = state=>{
  return {
      counter:state.counter,
      carousel:state.carousel,
  }
}

 class HomeScene extends Component{
   state={
      indexNews:[],
      indexProducts:[],
   }
   _keyExtractor = (item, index) => item.id.toString();
    getIndexNews=()=>{
      axios({
        url:`${commonUrl.url}/news?_page=1&_limit=3&_order=asc&_sort=id`,
        method:'get'
      }).then(res=>{
        this.setState({
          indexNews:[...res.data]
        })
      });
    }
    getIndexProducts=()=>{
      axios({
        url:`${commonUrl.url}/product?_page=1&_limit=12&_order=asc&_sort=id`
      }).then(res=>{
        this.setState({
          indexProducts:[...res.data]
        })
      })
    }
    componentDidMount=()=>{
      this.props.getCarouselListData();
      this.getIndexNews();
      this.getIndexProducts();
    }
   render(){
       return (
        <ScrollView style={{
          flex: 1,
        }}>
          <View style={styles.container}>
              <Swiper style={styles.wrapper} height={240}
              dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
              activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}}/>}
              paginationStyle={{
                bottom: -23, left: null, right: 10
              }} loop  autoplay>
                  {this.props.carousel.map(val => (
                    <View
                      key={val.id}
                      href={val.carUrl}
                      style={styles.slide}
                      title={<Text numberOfLines={1}>{val.text}</Text>}
                    >
                      <Image resizeMode='stretch' style={styles.image}  source={{uri:val.carImg}} />
                    </View>
                  ))}
              </Swiper>
          </View>
          <View>
              <List style={{marginHorizontal:20}}>
                <ListItem itemDivider>
                    <Text>时事新闻</Text>
                </ListItem>
                <ListItem>
                    <FlatList
                    data       = {this.state.indexNews}
                    renderItem = {({item,index}) => {
                    return <FlatIndexNews {...item}/>
                    }}
                    keyExtractor           = {this._keyExtractor}
                    ListHeaderComponent    = {this.renderHeader}
                    ListFooterComponent    = {this.renderFooter}
                    ListEmptyComponent     = {this.renderEmpty}
                    ItemSeparatorComponent = {this.renderItemSeparator}
                    />
                </ListItem>
              </List>
          </View>
          <View>
              <List style={{marginHorizontal:20}}>
                    <ListItem itemDivider>
                        <Text>畅销产品</Text>
                    </ListItem>
              </List>
          </View>
          <View style={ {flexDirection:'row-reverse',backgroundColor:"#fff",margin:20,justifyContent:'space-around',flexWrap:'wrap'}}>
                {
                  this.state.indexProducts.map(val=>{
                    return (
                      <View style={ {width:100,height:100,margin:5}} key={val.id.toString()} >
                          <Image  source={{uri:val.pImage}}
                          style={{
                            height  : 80,
                            width:100,
                          }}
                          ></Image>
                          <Text style={{fontSize:12,textAlign:'center'}}>{val.name}</Text>
                      </View>
                    )
                  })
                }
          </View>
        </ScrollView>


       )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:20,
    marginBottom:10,
    paddingBottom:30,
    overflow:'hidden'
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    flex: 1
  },
  categorybox: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: "center"
  },
  categoryimage: {
      height: 50,
      width: 50,
  },
  categorytext: {
      alignSelf: 'center',
      fontSize: 12,
      color: '#333333',
  },
});
export default connect(mapStateToProps,{increase,fetchList,commonUrl,getCarouselListData})(HomeScene);