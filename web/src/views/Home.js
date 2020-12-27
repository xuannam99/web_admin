import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  TeamOutlined ,
  UsergroupAddOutlined ,
  UploadOutlined,
} from '@ant-design/icons';
// auth
import { ToastContainer } from 'react-toastify';
import { isAuth, getCookie } from '../controllers/localStorage';
import axios from 'axios';
// view updata
import UpData from './Components/UploadData';
// view list user
import ListUser from './Components/ListUser';
// view list user admin
import ListUserAdmin from './Components/ListUserAdmin';
const { Header, Sider, Content } = Layout; // views
let heightScreen = window.innerHeight;
const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [index, setIndex] = useState(1);
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const getPosts = () => {
    const token = getCookie('token');
    axios
      .get(`${process.env.REACT_APP_API_URL}/`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  useEffect(() => {
    getPosts();
  }, [load]);
  return (
    <div style={{ flex: 1 }}>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
            <h4 style={{ color: 'white' }}>TOEIC SEB</h4>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<TeamOutlined/>} onClick={() => {
              setIndex(1);
            }} >
              Admin
            </Menu.Item>
            <Menu.Item key="2" icon={<UsergroupAddOutlined/>} onClick={() => {
              setIndex(2);
            }}>
              User
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />} onClick={() => {
              setIndex(3);
            }}>
              Data
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, display:'flex'}}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
            <div style={{flex:1,display:'flex',justifyContent:'flex-end',alignItems:'center',paddingRight:30}}>
              <UserOutlined style={{fontSize:25}}/>
            </div>
          </Header>
          <div style={{ height: heightScreen - 100, padding: 10 }}>
            {
              index===1? <ListUserAdmin/> : index===2? <ListUser />: <UpData />
            }      
          </div>
          {/* <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: heightScreen - 100,
            }}
          >            
            <UpData/>
          </Content> */}
        </Layout>
      </Layout>
    </div>
  );
}

export default Home
