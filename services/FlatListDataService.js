const urlPrefix = 'http://10.31.162.23:3000/'
const  apiGetAllFlatListData    = urlPrefix + 'people';
const  apiGetPageFlatListData   = urlPrefix +'people?_limit=5&_sort=desc&_order=id';
export const getAllFlatListData = function(){
    return fetch(apiGetAllFlatListData).then(res=>{
        return res.json();
    }).then(data=>{
        return data;
    })
}

// 为什么要加上params呢？
// {page:1} {page:2} .....
export const getPageFlatListData = async (params={page:1})=>{
    try {
        let res  = await fetch(apiGetPageFlatListData +'&_page=' + params.page);
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}