import React from 'react'
import './Login.css'
// 导入对应的使用组件
import { Icon, Button, Form, Divider } from 'semantic-ui-react'

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
  submit = () => {}
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

export default Login
