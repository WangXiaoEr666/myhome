import React from 'react'
// 导入编程式路由导航
import {withRouter} from 'react-router-dom'
// 导入login的css样式
import './Login.css'
// // 导入axios
import axios from 'axios'
// 导入对应的使用组件
import { Icon, Button, Form, Divider} from 'semantic-ui-react'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  handelPassword = event => {
    this.setState({
      password: event.target.value
    })
  }
  handelUsername = event => {
    this.setState({
      username: event.target.value
    })
  }
  // 点击提交功能
  submit = async () => {
    // http://47.96.21.88:8086/users/login  登录接口请求地址
    // console.log(this.state)
    // 手动验证如果未填写信息，停止发送请求
    if (this.state.username==='' && this.state.password==='') {
      alert('请输入完整信息')
      return 
    }
   let res = await axios.post('http://47.96.21.88:8086/users/login',{
      uname:this.state.username,
      pwd:this.state.password
    })
    const {history} = this.props

    // 如果账号密码正确，跳转页面，存储session信息
    if (res.data.meta.status===200) {
      // 存储用户登录信息，token
      sessionStorage.setItem('token',res.data.data.token)
      // 账号密码正确，则跳转到home页面
      history.push('/home')
    }

  }
  render() {
    return (
      <div className="login-container">
        <div className="login-top">
          <Icon name="home" size="massive" color="blue" />
        </div>

        <div className="login-form">
          <Form>
            <Form.Input
              icon="user"
              required
              size="big"
              iconPosition="left"
              name="username"
              placeholder="请输入用户名..."
              value={this.state.username}
              onChange={this.handelUsername}
            />

            <Form.Input
              type="password"
              icon="eye"
              required
              size="big"
              iconPosition="left"
              name="password"
              placeholder="请输入密码..."
              value={this.state.password}
              onChange={this.handelPassword}
            />
          </Form>
        </div>
        <Divider horizontal>More</Divider>
        <div className="login-end">
          <Button primary fluid onClick={this.submit}>
            登录
          </Button>
        </div>
        <div className="login-chat">
          <Icon name="wechat" size="huge" color="green"></Icon>
          <Icon name="qq" size="huge" color="teal"></Icon>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
