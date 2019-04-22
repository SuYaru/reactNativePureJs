import React from 'react';
import { StyleSheet,View,FlatList,Image,Dimensions,ActivityIndicator,SafeAreaView,Text} from 'react-native';
import { getAllFlatListData,getPageFlatListData } from '../services/FlatListDataService';
import { FlatListItem }  from '../components'


export default class Peoples extends React.Component {
  state = {
    page                  : 1,
    flatListDataFromServer: [],
    isLoadMore            : false,
    refreshing            : false
  }
  // 关键提取器，原数据中 id 为 number 型，要转为字符串
  _keyExtractor = (item, index) => item.id.toString();

  // 进行远程请求
  makeRemoteRequest = ()=>{
    this.setState({
      isLoadMore: true
    },()=>{
      if(this.state.isLoadMore){
        getPageFlatListData({page:this.state.page}).then(data=>{
          this.setState({
            flatListDataFromServer: [...this.state.flatListDataFromServer,...data],
            page                  : this.state.page + 1,
            isLoadMore            : false,
            refreshing            : false
          })
        })
     }

    })
  }

  // 初始化请求远程数据   Later on in your component
  async componentDidMount() {
      this.makeRemoteRequest();
  }

  renderHeader = ()=>{
    return (
      <View>
        <Text>现在显示的是列表头部内容</Text>
      </View>
    )
  }

  renderFooter = ()=>{
    return (
      <View style={{
        borderColor    : '#e5e5e5',
        paddingVertical: 20,
        borderTopWidth : 1
      }}>
        <ActivityIndicator animating size="large"/>
      </View>
    )
  }

  renderEmpty = ()=>{
    return (
      <View>
        <Text>暂无数据显示</Text>
      </View>
    )
  }

  renderItemSeparator = ()=>{
    return (
      <View
      style={{height:20}}>
      </View>
    )
  }

  loadMore = ()=>{
    if(!this.state.isLoadMore){
        this.makeRemoteRequest();
    }
  }

  onRefresh = ()=>{
    this.setState({
      page                  : 1,
      flatListDataFromServer: [],
      refreshing            : true
    },()=>{
      this.makeRemoteRequest();
    })
  }

  // 原来 FlatList 外部是有两个 Container 包括，因此Container 也被 FlatList 撑大
  // 所以FlatList 与 Container 之间满足最底部距离的要求，会一次性加载完 loadMore 函数
  // 为了能实现加载更多效果，外部 Container 换成 View 包裹
  render() {
    return (
        <FlatList
        data       = {this.state.flatListDataFromServer}
        renderItem = {({item,index}) => {
        return <FlatListItem {...item}/>
        }}
        keyExtractor           = {this._keyExtractor}
        ListHeaderComponent    = {this.renderHeader}
        ListFooterComponent    = {this.renderFooter}
        ListEmptyComponent     = {this.renderEmpty}
        ItemSeparatorComponent = {this.renderItemSeparator}
        onEndReached           = {this.loadMore}
        onEndReachedThreshold  = {0.1}
        refreshing             = {this.state.refreshing}
        onRefresh              = {this.onRefresh}
        />
    );
  }
}



