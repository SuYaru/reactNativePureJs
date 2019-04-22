import React from 'react';
import { StyleSheet,View,SafeAreaView,Text,Image,Dimensions} from 'react-native';
import {Font,AppLoading} from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Peoples,HomeScene,DetailsScene,NewsScene,NewsDetailsScene,ProductScene,ProductDetailsScene,UserScene}  from './scenes'
import {Router,Stack,Scene,Tabs}   from 'react-native-router-flux'
import { TabIcon,HomeNavBar,Camera,NewsNavBar,UserNavBar} from './components'
import {Provider} from 'react-redux'
import store from './store'

export default class App extends React.Component {
  state={
    loading:true
  }
  async componentDidMount() {
      await Font.loadAsync({
        'Roboto'       : require('./node_modules/native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      this.setState({
        loading:false
      })

  }
  // 原来 FlatList 外部是有两个 Container 包括，因此Container 也被 FlatList 撑大
  // 所以FlatList 与 Container 之间满足最底部距离的要求，会一次性加载完 loadMore 函数
  // 为了能实现加载更多效果，外部 Container 换成 View 包裹
  render() {
    if(this.state.loading){
       return <AppLoading />
    }else{
        return (
          <Provider store={store}>
              <SafeAreaView style={styles.container}>
                  <Router>
                      <Tabs key="tabbar" activeBackgroundColor="white">
                        <Stack key="home" title="首页" icon={TabIcon} iconName="home">
                          <Scene key       = "detailsScene" component = {DetailsScene}  title= "详情页"/>
                          <Scene key       = "camera" component = {Camera}  title= "扫描二维码"/>
                          <Scene key="homeScene" component={HomeScene} title="首页" navBar={HomeNavBar} initial/>
                        </Stack>
                        <Stack key="news" title="新闻" icon={TabIcon} iconName="newspaper-o">
                          <Scene
                          key       = "newsDetailsScene"
                          path={"/newsDetailsScene/:id"}
                          component = {NewsDetailsScene}
                          title     = "详情页"
                          />
                          <Scene key="newsScene" component={NewsScene} title="新闻" navBar={NewsNavBar} initial />
                        </Stack>
                        <Stack key="product" title="产品" icon={TabIcon} iconName="product-hunt">
                          <Scene
                          key       = "productDetailsScene"
                          component = {ProductDetailsScene}
                          title     = "详情页"/>
                          <Scene key="productScene" component={ProductScene} title="产品" navBar={HomeNavBar} initial/>
                        </Stack>
                        <Stack key="carts" title="购物车" icon={TabIcon} iconName="shopping-cart">
                            <Scene key="cartsScene" component={HomeScene} title="购物车" navBar={HomeNavBar} initial/>
                        </Stack>

                        <Stack key="user" title="用户" icon={TabIcon} iconName="user-o">
                          <Scene key       = "detailsScene" component = {DetailsScene}  title= "详情页"/>
                          <Scene key       = "camera" component = {Camera}  title= "扫描二维码"/>
                          <Scene key="userScene" component={UserScene} title="用户" navBar={UserNavBar} initial/>
                        </Stack>
                      </Tabs>
                  </Router>
              </SafeAreaView>
          </Provider>
        );
    }
  }
}

// 我现在的这个对象就是样式对象，已经明确了的
// 而不是一个普通的Object对象，这就意味着，在RN进行转化解析时可以省去很多的时间，提高性能
const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: '#fff',
    paddingTop: 25,
    fontSize:16
  },
});