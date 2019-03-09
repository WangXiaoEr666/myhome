import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
// 导入登录页面组件
import Login from './Login'
// 导入主页面
import Main from './module/main'
// 导入semantic-ui-css样式(公用的css样式导入在这里，其它小组件中的样式放在他们自己的组件里)
import 'semantic-ui-css/semantic.min.css'
// 导入外界字体图标
import './assets/fonts/style.css'
// 导入限制登录的组件
import AuthCheck from './Auth.js'

 
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          {/* <Route path="/home" component={Main} /> */}
          <AuthCheck path="/home" component={Main} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
