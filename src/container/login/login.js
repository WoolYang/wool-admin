import React from 'react';
import { Row, Col, Form, Icon, Input, Button, Checkbox, message } from 'antd';
import './login.less';

const FormItem = Form.Item;

class Login extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.info('成功登录！');
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
                            {getFieldDecorator('companyname', {
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

export default Form.create()(Login); 