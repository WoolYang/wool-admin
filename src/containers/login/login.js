import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Form, Icon, Input, Button, message, Alert } from 'antd';

import { loginRequest } from '../../actions/login';

import './login.less';

const FormItem = Form.Item;

const mapStateToProps = state => ({
    login: state.login
});

const mapDispatchToProps = dispatch => ({
    loginRequest: bindActionCreators(loginRequest, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
class Login extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.login.data&&nextProps.login.data.code == 200) {
            message.success(nextProps.login.data.msg);
            this.props.history.push('/index');
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.loginRequest(values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { error } = this.props.login;

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
                        <FormItem className={error==null ? 'vh' : 'vv'} >
                            <Alert message={error&&error.msg} type="error" showIcon />
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default Form.create()(Login); 