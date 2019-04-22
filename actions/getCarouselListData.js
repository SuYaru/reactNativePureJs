import axios from 'axios';
import {commonUrl} from './commonUrl'
export const getCarouselList = (data)=>{
    return {
        type: 'GETCAROUSELIST',
        payload:data
    }
}

export function getCarouselListData(params={page:1}){
    //console.log(commonUrl.url);    // dispatch 不存在
    return dispatch=>{
        var url = `${commonUrl.url}/carousel?_page=${params.page}&_limit=5&_order=asc&_sort=id`;
        return axios({
            url   : url,
            method: 'get'
        }).then(res=>{
            //console.log('数据请求成功！');
            /* var data={
                total:res.headers["x-total-count"],
                lists:res.data
            }*/
            dispatch(getCarouselList(res.data));
        })
    }
}