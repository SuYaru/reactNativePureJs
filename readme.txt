
回顾以前Vue/React的项目结构
vue项目目录结构
assets  静态资源文件目录
src
    main.js/App.js 入口文件
    components 存放一些公共的可调用组件
    store   数据仓库目录
        modules
    routes 路由配置目录
    pages  页面

React项目目录结构
src
    App.js入口
    components 组件
    store   仓库
    reducers
    actions
    services 服务层（绝大多数情况就做数据处理，或者功能实现）
        1）请求所有用户
        2) 以分页的形式进行用户列表的操作 page limit order sort
        3) 允许添加新用户
        4) 可以实现用户的修改
        5) 可以实现用户的删除操作
        ......

使用方法：
    yarn add 安装所有依赖
    开启json-server 端口数据
    yarn start 启动expo，在模拟器上根据 expo 暴露的端口运行模拟移动端效果

