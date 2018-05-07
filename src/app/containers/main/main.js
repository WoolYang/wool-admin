import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from '../../components/sidebar/sidebar';
import { childRoutes } from '../../routes/childRoutes';
import './main.less';

const { Header, Content } = Layout;

class Main extends React.Component {

    render() {
        return (
            <Layout className="h100" >
                <Header className="header">
                    <div className="logo" />
                </Header>
                <Layout>
                    <Sidebar />
                    <Layout className='main'>
                        <Content className='content'>
                            {
                                childRoutes.map((route, index) => (
                                    <Route key={index} path={route.path} component={route.component} exact={route.exact} />
                                ))
                            }
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default Main;