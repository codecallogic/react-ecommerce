import React, {useState} from 'react'
import {Menu} from 'antd'
import { AppstoreOutlined, UserOutlined, UserAddOutlined, SettingOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom'

const { SubMenu } = Menu

const Header = ({}) => {
  
  const [current, setCurrent] = useState('home')

  const handleClick = (e) => {
    setCurrent(e.key)
  }
  
  return (
    <>
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/home">Home</Link>
      </Menu.Item>

      <Menu.Item key="register" className="float-right" icon={<UserAddOutlined />}>
        <Link to="/register">Register</Link>
      </Menu.Item>

      <Menu.Item key="login" className="float-right" icon={<UserOutlined />}>
        <Link to="/login">Login</Link>
      </Menu.Item>

      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username">
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      </Menu>
    </>
  )
}

export default Header
