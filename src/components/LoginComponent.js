'use strict';
import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { checkLogin } from '../actions/index';
import PropTypes from 'prop-types'
const FormItem = Form.Item;
require('styles//Login.less');

class componentName extends Component {
  static propTypes = {
    prop: PropTypes
  }
  state = {
    isPass: false
  }

  checkLogin = (value) => {

    if (value) {
      this.setState({
        isPass: true
      })

    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.info('成功登录！');
        //跳转到index
        setInterval(function () {
          location.href = '/index'
        }, 1000)
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login-component'>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
              )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登 录
          </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Form.create()(componentName);