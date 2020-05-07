<p align="center">
<img src="https://img.shields.io/badge/Language-%20JavaScript%20-f9e229.svg">
</p>

# dengbo-movice(邓波的毕业设计)

## 技术栈

### 前端

📦 react + redux + react-router + react-router-redux + webpack + ES6 + sass

### 数据可视化

📦 Echarts

### 后端

✏️ Node(express)

### 数据库

✏️ MongoDB

## 运行项目

```bash
git clone https://github.com/Aemple/react-demo

cd react-demo

npm i  # 或者运行 yarn (推荐)

npm start

cd server

node server.js # 或者 nodemon server.js (推荐)

mongo
```

## 目录结构划分

```
src
  containers 放置页面组件比如说Home
      components 放此页面组件独享的子组件
  components 放置页面之间可以共享的共用组件
  common 放一些公共的样式等内容
  images 放图片
  store redux仓库
      reducers
      actions
      action-types
      index
  index.js入口文件
  index.html 模板文件
```

## redux 结构

![Alt text](Read/state.png)

## 个人感悟（重难点）

装饰器使用能简化业务代码，让代码结构更清晰

注意提升页面性能（项目中：分流加载、防抖等）

刷新页面机制

受保护路由（在没有登录的情况下不能访问个性推荐、个人中心界面会跳转到登录界面）

刷新后登录状态获取（公共页面获取状态）

react-router-redux 页面路由、状态数据统一（后续写一个源码剖析）

### 前后端交互技巧

1. 定义仓库中的数据结构
2. 去后台实现这个接口
3. 前台编写一个请求此接口的 API 方法
4. 定义 action-types，修改 reducer 并处理此动作
5. 编写一个 action 方法，用来调用 API 方法，请求接口，并得到返回的数据，构造 action 派发给仓库
6. 在组件里调用此方法,并且填充仓库
7. 在组件使用此数据进行渲染

## 说明

> 开发环境 window10 Chrome 65 nodejs 8.12.0
