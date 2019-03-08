import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'
// 导入登录页面样式
import './Login.css'
// 导入登录页面组件
import Login from './Login'

// 导入主页面
import Main from './module/main'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Main} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
