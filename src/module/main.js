import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
// 导入对应的使用组件
import { Grid } from 'semantic-ui-react'
// 导入css样式
import './main.css'
// 导入各个菜单栏子组件
import Chat from './chat/index.js'
import Home from './home/index.js'
import Info from './info/index.js'
import My from './my/index.js'

// 给每个菜单栏自定义路由样式
class Menu extends React.Component {
  render() {
    let { path, mname, icon } = this.props
    let className = 'iconfont icon-' + icon
    return (
      <Route
        path={path}
        children={({ match }) => {
          return (
            <Link to={path}>
              <div className={match ? 'placeholder active' : 'placeholder'}>
                <i className={className} />
                <div>{mname}</div>
              </div>
            </Link>
          )
        }}
      />
    )
  }
}

class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="main-body">
          <Switch>
            <Route path="/home/main" component={Chat} />
            <Route path="/home/info" component={Home} />
            <Route path="/home/chat" component={Info} />
            <Route path="/home/my" component={My} />
          </Switch>
        </div>
        <div className="main-menu">
          <Grid columns={4} divided>
            <Grid.Row>
              <Grid.Column>
                <Menu path="/home/main" mname="主页" icon="enlarge" />
              </Grid.Column>
              <Grid.Column>
                <Menu path="/home/info" mname="资讯" icon="bubble" />
              </Grid.Column>
              <Grid.Column>
                <Menu path="/home/chat" mname="微聊" icon="search" />
              </Grid.Column>
              <Grid.Column>
                <Menu path="/home/my" mname="我的" icon="account_box" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Main
