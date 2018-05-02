import React from 'react';
import { Row, Col, Form, Icon, Input, Button, message } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { login } from '../../actions/login';

import './login.less';

const FormItem = Form.Item;

class Login extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.login(values).payload.then(res => {
                    if (res.code == 200) {
                        message.info('登录成功！');
                    } else {
                        message.error('登录失败！');
                    }
                });

            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row className="login" type="flex" justify="space-around" align="middle">
                <Col span="6">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0, 0, 0, .25)' }} />} placeholder="admin" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0, 0, 0, .25)' }} />} type="password" placeholder="123456" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="btn-login">登 录</Button>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => ({
    login: state.login
});

const mapDispatchToProps = dispatch => ({
    login: bindActionCreators(login, dispatch)
});

export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(Login)); 