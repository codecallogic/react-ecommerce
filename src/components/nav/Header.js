import React, {useState} from 'react'
import {Menu} from 'antd'
import { AppstoreOutlined, UserOutlined, UserAddOutlined, SettingOutlined, LogoutOutlined} from '@ant-design/icons';
import {Link, useHistory} from 'react-router-dom'
import firebase from 'firebase'
import {useDispatch, useSelector} from 'react-redux'

const { SubMenu } = Menu

const Header = ({}) => {

  let dispatch = useDispatch()
  let history = useHistory()
  let {user} = useSelector((state) => ({...state}))
  
  const [current, setCurrent] = useState('home')

  const handleClick = (e) => {
    setCurrent(e.key)
  }

  const logout = () => {
    firebase.auth().signOut()
    dispatch({
      type: "LOGOUT",
      payload: null
    })

    history.push('/login')
  }
  
  return (
    <>
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>

      {!user && 
      <Menu.Item key="register" className="float-right" icon={<UserAddOutlined />}>
        <Link to="/register">Register</Link>
      </Menu.Item>
      }

      {!user && 
      <Menu.Item key="login" className="float-right" icon={<UserOutlined />}>
        <Link to="/login">Login</Link>
      </Menu.Item>
      }

      {user && 
      <SubMenu key="SubMenu" icon={<SettingOutlined />} className="float-right" title={user.email && user.email.split('@')[0]}>
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
        <Menu.Item icon={<LogoutOutlined />} onClick={logout}>Logout</Menu.Item>
      </SubMenu>
      } 
      </Menu>
    </>
  )
}

export default Header
