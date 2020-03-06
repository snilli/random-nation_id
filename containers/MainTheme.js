import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
import { ReloadOutlined } from '@ant-design/icons'
class MainTheme extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }
  state = {
    collapsed: false,
  }

  onCollapse = collapsed => {
    this.setState({ collapsed })
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          breakpoint="lg"
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <ReloadOutlined />
              <span>สุ่มเลขบัตรประชาชน</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item />
            </Breadcrumb>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            โปรแกรมสุ่มเลขบัตรประชาชน
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default MainTheme
