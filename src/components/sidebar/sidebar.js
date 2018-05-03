import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { Layout, Menu, Icon } from 'antd';
import './sidebar.less';
const { SubMenu } = Menu;
const { Sider } = Layout;

class Sidebar extends React.Component {
  
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
      
    render() {
        const {collapsed} = this.state;
        return (
            <Sider  
                trigger={null} 
                collapsible
                collapsed={collapsed}
                width={200} 
                className='sidebar'
            >
                <Icon
                    className={classnames('trigger',{'collapsed':collapsed})}
                    type='tag'
                    onClick={this.toggle}
                />
                <Menu
                    mode='inline'
                    defaultSelectedKeys={['1']}
                    className='menu'
                >
                    <SubMenu key='sub1' title={<span><Icon type='user' /><span>菜单1</span></span>}>
                        <Menu.Item key='1'><NavLink to='/dashboard'>dashboard</NavLink></Menu.Item>
                        <Menu.Item key='2'>option2</Menu.Item>
                    </SubMenu>
                    <SubMenu key='sub2' title={<span><Icon type='laptop' /><span>菜单2</span></span>}>
                        <Menu.Item key='5'>option5</Menu.Item>
                        <Menu.Item key='6'>option6</Menu.Item>
                    </SubMenu>
                    <SubMenu key='sub3' title={<span><Icon type='notification' /><span>菜单3</span></span>}>
                        <Menu.Item key='9'>option9</Menu.Item>
                        <Menu.Item key='10'>option10</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}

export default Sidebar;