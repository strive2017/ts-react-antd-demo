import React from 'react';

import { 
    Layout,
    Menu 
} from 'antd';

import Employee from './employee/index'
import './app.css';
const { Header, Content, Footer } = Layout;

const App = () => (
    <Layout className="App">
        <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} className="menu">
                <Menu.Item key="1">员工管理</Menu.Item>
                <Menu.Item key="2">系统设置</Menu.Item>
            </Menu>
        </Header>
        <Content className="contentWrap">
           <Employee/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>antd typescript demo</Footer>
    </Layout>


)

export default App;
