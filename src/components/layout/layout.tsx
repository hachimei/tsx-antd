import * as React from 'react';

// import Layout from '../../../node_modules/antd/lib/layout/index';
// import Menu from '../../../node_modules/antd/lib/menu/index';
// import Icon from '../../../node_modules/antd/lib/icon/index';

// import '../../../node_modules/antd/lib/layout/style/index';
// import '../../../node_modules/antd/lib/menu/style/index';
// import '../../../node_modules/antd/lib/icon/style/index';
/*以上的注释是手动按需加载，比较繁琐，利用ts-import-plugin实现按需加载antd组件和样式 */

import { Layout, Menu, Icon, Input, Alert } from "antd";

import './style/layout.less'

const { Header, Content, Footer, Sider } = Layout;
const Search = Input.Search;
const baiduUrl = "https://www.baidu.com/s?wd=";

interface State{
    url: string,
    msg: string
}

export default class MyLayout extends React.Component<object,State>{
    constructor(props: any){
        super(props)

        this.state = {
            url: '',
            msg: ''
        }
    }

    //判断输入是否网址
    isURL(str: string): boolean{
        return !!str.match(/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g);
      }

    // 处理用户输入
    search(val: string){
        if(val !== ''){
            if(this.isURL(val)){
                // 是合法网址
                this.setState({
                    url: val,
                    msg: '请按F12打开控制台后，用箭头工具去选中区域'
                })
            }else{
                // 不是合法网址，调用百度搜索
                this.setState({
                    url: baiduUrl + val,
                    msg: '请按F12打开控制台后，用箭头工具去选中区域'
                })
            }
        }
    }

    render(){

        // 业务逻辑
        // TODO

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
            <Header style={{ background: '#fff', padding: 0 }}>
            <Alert message={this.state.msg} type="info" ></Alert>
            </Header>
            <Content style={{ margin: '24px 46px 0', height: '780px' }}>
                <Search placeholder="请输入网址或搜索词（默认百度搜索）"
                 onSearch = {value => this.search(value)}
                 size = "large"
                 enterButton
                 ></Search>
                <iframe src={ this.state.url } frameBorder="1" style = {{ margin: '24px 46px 0',width: '100%' , height: '680px' }} ></iframe>
            </Content>
            </Layout>
        </Layout>
        );
    }
}