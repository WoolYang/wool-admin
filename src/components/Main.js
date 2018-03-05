import React from 'react'
import { bindActionCreators } from 'redux'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'
import { connect } from 'react-redux'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import * as Actions from '../actions'
import Routes from '../routes/index';

const BaseLayout = ({ isLogin, checkLogin }) => (
    <div>
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px', color: '#fff' }}
                >
                    <Menu.Item key="1">xxx平台12345</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '40px 50px' }}>
                <div style={{ background: '#fff', padding: 100, minHeight: 400 }}>
                    <Routes />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                xxxX
            </Footer>
        </Layout>
    </div>
)
const mapStateToProps = state => ({
    isLogin: state.isLogin
})

const mapDispatchToProps = (dispatch) => ({
    checkLogin: bindActionCreators(Actions.checkLogin, dispatch)
})

export default connect()(BaseLayout)


