import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

// 限制登录  
class AuthCheck extends Component {
  render() {
    // -------------------------------------两种方法公用部分
    // 将组件传递过来的路径，做处理
    let { path, component: Component } = this.props
    // 如果有登录状态
    let isLogin = sessionStorage.getItem('token') ? true : false

    // ---------------------------自己使用方法一
    // let info = null
    // if (!isLogin) {
    //   info = <Redirect to="/" />
    //   return info
    // }
    // info = <Route path={path} component={Component} />
    // return info
    // ---------------------------方法二 自定义路由链接
    return (
      <Route
        path={path}
        render={({ match }) => {
          let info = <Component/>
          if (!isLogin) {
            info = <Redirect to="/" />
          }
          return info
        }}
      />
    )
  }
}

export default AuthCheck