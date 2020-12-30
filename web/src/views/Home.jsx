import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu, Badge, Avatar, Popover } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  UploadOutlined,
  BellOutlined,
  NotificationOutlined 
} from '@ant-design/icons';
// auth
import { ToastContainer } from 'react-toastify';
import { isAuth, getCookie, signout } from '../controllers/localStorage';
import axios from 'axios';
// view updata
import UpData from './Components/UploadData';
// view list user
import ListUser from './Components/ListUser';
// view list user admin
import ListUserAdmin from './Components/ListUserAdmin';
// import components notfication
import Noti from './Components/Noti';
import Notification from './Components/SendNoti';

const { Header, Sider, Content } = Layout; // views
let heightScreen = window.innerHeight;
const Home = ({ history }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [index, setIndex] = useState(1);
  const [data, setData] = useState([]);
  const [dataNoti, setDataNoti] = useState([]);
  const [amountNoti, setAmountNoti] = useState(0);
  const [load, setLoad] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visibleNoti, setVisibleNoti] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  // logout
  const Logout = () => {
    signout(() => {
      history.push('/Login')
    });
  }
  // set change logout
  const handleVisibleChange = visible => {
    setVisible(visible);
  };
  // set click notifi
  const handleVisibleChangeNoti = visible => {
    setVisibleNoti(visible);
    setAmountNoti(0);
  };
  // push datanoti
  const pushDataNoti = (data) => {
    return new Promise((resolve, reject) => {
      dataNoti.forEach(element => {
        data.push(element);
      });
      resolve(data);
    });
  }
  // set data notifi
  const setDataNotification = (data) => {
    setAmountNoti(data.length);
    pushDataNoti(data).then(res => {
      setDataNoti(res);
    });
  }
  // set view noti
  const viewNoti = () => {
    return (
      <div style={{overflowY: 'scroll',height:200}} >
        {
            dataNoti.map((element) =>
            <Noti
              content={element.content}
              date={element.date}
              status={element.status}/>
          )
        }
      </div>
    )
  }
  const getPosts = () => {
    const token = getCookie('token');
    axios
      .get(`${process.env.REACT_APP_API_URL}`, {
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
            <Menu.Item key="1" icon={<TeamOutlined />} onClick={() => {
              setIndex(1);
            }} >
              Admin
            </Menu.Item>
            <Menu.Item key="2" icon={<UsergroupAddOutlined />} onClick={() => {
              setIndex(2);
            }}>
              User
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />} onClick={() => {
              setIndex(3);
            }}>
              Data
            </Menu.Item>
            <Menu.Item key="4" icon={<NotificationOutlined />} onClick={() => {
              setIndex(4);
            }}>
              Send notification
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, display: 'flex' }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 30, marginLeft: 20 }}>
              <div style={{ width: 100, display: 'flex' }}>
                <div style={{ width: 150, flex: 1 }}>
                  <Popover
                    placement="leftTop"
                    content={
                      viewNoti      
                    }
                    title="All notification"
                    trigger="click"
                    visible={visibleNoti}
                    onVisibleChange={handleVisibleChangeNoti}
                  >
                    <Badge count={amountNoti}>
                      <Avatar icon={<BellOutlined />} />
                    </Badge>
                  </Popover>
                </div>
                <div style={{ width: 100, flex: 1 }}>
                  <Popover
                    content={<a onClick={Logout}>Logout</a>}
                    title="Option"
                    trigger="click"
                    visible={visible}
                    onVisibleChange={handleVisibleChange}
                  >
                    <Avatar icon={<UserOutlined />} />
                  </Popover>
                </div>
              </div>
            </div>
          </Header>
          <div style={{ height: heightScreen - 100, padding: 10 }}>
            {
              index === 1 ? <ListUserAdmin />
                : index === 2 ? <ListUser />
                : index === 3? <UpData setDataNotification={(setDataNotification)}/>
                :<Notification></Notification>
            }
          </div>
        </Layout>
      </Layout>
    </div>
  );
}
export default Home
