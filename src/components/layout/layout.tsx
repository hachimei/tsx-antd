import * as React from 'react';

// import Layout from '../../../node_modules/antd/lib/layout/index';
// import Menu from '../../../node_modules/antd/lib/menu/index';
// import Icon from '../../../node_modules/antd/lib/icon/index';

// import '../../../node_modules/antd/lib/layout/style/index';
// import '../../../node_modules/antd/lib/menu/style/index';
// import '../../../node_modules/antd/lib/icon/style/index';
/*以上的注释是手动按需加载，比较繁琐，利用ts-import-plugin实现按需加载antd组件和样式 */

import { Layout, Menu, Icon } from "antd";

import './style/layout.less'

const { Header, Content, Footer, Sider } = Layout;

interface Props{

}

export default class MyLayout extends React.Component<Props,object>{
    constructor(props: any){
        super(props)
    }

    render(){
        return (
            <Layout>
            <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken:any) => { console.log(broken); }}
            onCollapse={(collapsed:any, type:any) => { console.log(collapsed, type); }}
            >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1">
                <Icon type="user" />
                <span className="nav-text">nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                <Icon type="video-camera" />
                <span className="nav-text">nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                <Icon type="upload" />
                <span className="nav-text">nav 3</span>
                </Menu.Item>
                <Menu.Item key="4">
                <Icon type="user" />
                <span className="nav-text">nav 4</span>
                </Menu.Item>
            </Menu>
            </Sider>
            <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                content
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
                <img src="https://ps.ssl.qhimg.com/sdmt/127_135_100/t01f407044047d98e89.jpg" alt="" className="src"/>
            </Footer>
            </Layout>
        </Layout>
        );
    }
}