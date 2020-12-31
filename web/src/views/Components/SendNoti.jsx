import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "./Card/Card.jsx";
import CardHeader from "./Card/CardHeader.jsx";
import CardBody from "./Card/CardBody.jsx";
import "antd/dist/antd.css";
import { Combobox } from 'react-widgets'

import { Table, Tag, Space, Button, Modal } from "antd";
const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  }
};

const useStyles = makeStyles(styles);
export default function Notification() {
  const classes = useStyles();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
    textChange: 'Sign Up',
  });
  const { name, email, password1, password2, textChange } = formData;
  const packageBuy = ['orange', 'red', 'blue', 'purple'];

  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleOk = () => {

  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  return (
    <Card>
      <CardHeader color="primary">
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flex: 1 }}>
            <h4 className={classes.cardTitleWhite}>Send Notification</h4>
          </div>
          <div style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', display: 'flex' }}>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ display: 'flex', padding: 10, flexDirection: 'row' }} >
          <div style={{ flex: 7, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <text style={{ textAlign: 'start', fontSize: 15, color: '#0A81B9' }}>Gửi thông báo giảm giá <text style={{ fontWeight: 'bold', color: 'black' }}>5%</text> cho gói <text style={{ fontWeight: 'bold' }}>BASIC 1</text></text>
          </div>
          <div style={{ flex: 3, justifyContent: 'flex-end', display: 'flex' }}>
            <Button>Send</Button>
          </div>
        </div>
        <div style={{ borderBottomColor: 'black', borderBottomWidth: 1, }} />
        <div style={{ display: 'flex', padding: 10, flexDirection: 'row' }} >
          <div style={{ flex: 7, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <text style={{ textAlign: 'start', fontSize: 15, color: '#0A81B9' }}>Gửi thông báo giảm giá <text style={{ fontWeight: 'bold', color: 'black' }}>5%</text> cho gói <text style={{ fontWeight: 'bold' }}>BASIC 2</text></text>
          </div>
          <div style={{ flex: 3, justifyContent: 'flex-end', display: 'flex' }}>
            <Button>Send</Button>
          </div>
        </div>
        <div style={{ borderBottomColor: 'black', borderBottomWidth: 1, }} />
        <div style={{ display: 'flex', padding: 10, flexDirection: 'row' }} >
          <div style={{ flex: 7, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <text style={{ textAlign: 'start', fontSize: 15, color: '#0A81B9' }}>Gửi thông báo giảm giá <text style={{ fontWeight: 'bold', color: 'black' }}>5%</text> cho gói <text style={{ fontWeight: 'bold' }}>STANDART</text></text>
          </div>
          <div style={{ flex: 3, justifyContent: 'flex-end', display: 'flex' }}>
            <Button>Send</Button>
          </div>
        </div>
        <div style={{ borderBottomColor: 'black', borderBottomWidth: 1, }} />
        <div style={{ display: 'flex', padding: 10, flexDirection: 'row' }} >
          <div style={{ flex: 7, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <text style={{ textAlign: 'start', fontSize: 15, color: '#0A81B9' }}>Gửi thông báo giảm giá <text style={{ fontWeight: 'bold', color: 'black' }}>5%</text> cho gói <text style={{ fontWeight: 'bold' }}>PREMIUM</text></text>
          </div>
          <div style={{ flex: 3, justifyContent: 'flex-end', display: 'flex' }}>
            <Button>Send</Button>
          </div>
        </div>
        <div style={{ borderBottomColor: 'black', borderBottomWidth: 1, }} />
        <div style={{ display: 'flex', padding: 10, flexDirection: 'row' }} >
          <div style={{ flex: 7, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <text style={{ textAlign: 'start', fontSize: 15, color: '#0A81B9' }}>Tùy chỉnh</text>
          </div>
          <div style={{ flex: 3, justifyContent: 'flex-end', display: 'flex' }}>
            <Button style={{ backgroundColor: '#ab47bc', color: 'white' }} onClick={
              showModal
            }>Cutom</Button>
          </div>
        </div>
        <Modal title="Add data" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <div className="mx-auto max-w-xs relative ">
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="text"
              placeholder="Name"
              onChange={handleChange('name')}
              value={name}
            />
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="email"
              placeholder="Email"
              onChange={handleChange('email')}
              value={email}
            />
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="password"
              placeholder="Password"
              onChange={handleChange('password1')}
              value={password1}
            />
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange('password2')}
              value={password2}
            />
          </div>
        </Modal>
      </CardBody>
    </Card>
  );
}
