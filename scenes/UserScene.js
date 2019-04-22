import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Dimensions,
    SafeAreaView,
    SectionList,
    FlatList,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
const { width, height } = Dimensions.get('window');

const numColumns = 5;

export default class Me extends Component {
    render() {
        const data = [{
            content: [
                {key: 'strikethrough', title: '排行榜'},
                {key: 'heart', title: '优惠券'},
                {key: 'arrow-circle-o-down', title: '置换'},
                {key: 'minus-circle', title: '我的收藏'},
                {key: 'check-circle-o', title: '附近'},
                {key: 'expand', title: '我的评价'},
                {key: 'eye-slash', title: '换肤'},
                {key: 'instagram', title: '客服'},
                {key: 'whatsapp', title: '更多'},
            ],
            key: 'content',
        }];
        return (
            <SafeAreaView style={styles.container}>
                <SectionList
                    sections={[{data}]}
                    renderItem={this._renderSectionItem}
                    ListFooterComponent={this._ListFooterComponent}
                    keyExtractor={this._keyExtractor}
                    />
            </SafeAreaView>
        )
    }

    _keyExtractor = (item, index) => {
        return item.key;
    }
    _renderItem = ({item}) => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.item}
            >
                <Icon name={item.key} style={{color:'blue'}}></Icon>
                <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    _renderSectionItem = ({section}) => {
        return (
            <FlatList
                data={section.data[0].content}
                numColumns={numColumns}
                renderItem={this._renderItem}
                style={{backgroundColor: '#fff'}}
                scrollEnabled={false}
            />
        )
    }

    _ListFooterComponent = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.footer}
            >
                <Text>好友动态</Text>
                <Image
                    source={{uri:'arrow_right'}}
                    style={{width: 7, height: 12}}
                />
            </TouchableOpacity>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 100,
        backgroundColor: '#fff',
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    headerUser: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    footer: {
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 10,
    },
    item: {
        backgroundColor: '#fff',
        width: width/numColumns,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemImage: {
        width: 40,
        height: 40,
        marginBottom: 5,
    },
    itemText: {
        fontSize: 12,
    }

})


