import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "./Card/Card.jsx";
import CardHeader from "./Card/CardHeader.jsx";
import CardBody from "./Card/CardBody.jsx";
import "antd/dist/antd.css";
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

  const packageBuy = ['orange', 'red', 'blue', 'purple'];

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
        <div style={{ borderBottomColor: '#A0ABA6', borderBottomWidth: 1, }} />
        <div style={{ display: 'flex', padding: 10, flexDirection: 'row' }} >
          <div style={{ flex: 7, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <text style={{ textAlign: 'start', fontSize: 15, color: '#0A81B9' }}>Gửi thông báo giảm giá <text style={{ fontWeight: 'bold', color: 'black' }}>5%</text> cho gói <text style={{ fontWeight: 'bold' }}>BASIC 2</text></text>
          </div>
          <div style={{ flex: 3, justifyContent: 'flex-end', display: 'flex' }}>
            <Button>Send</Button>
          </div>
        </div>
        <div style={{ borderBottomColor: '#A0ABA6', borderBottomWidth: 1, }} />
        <div style={{ display: 'flex', padding: 10, flexDirection: 'row' }} >
          <div style={{ flex: 7, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <text style={{ textAlign: 'start', fontSize: 15, color: '#0A81B9' }}>Gửi thông báo giảm giá <text style={{ fontWeight: 'bold', color: 'black' }}>5%</text> cho gói <text style={{ fontWeight: 'bold' }}>STANDART</text></text>
          </div>
          <div style={{ flex: 3, justifyContent: 'flex-end', display: 'flex' }}>
            <Button>Send</Button>
          </div>
        </div>
        <div style={{ borderBottomColor: '#A0ABA6', borderBottomWidth: 1, }} />
        <div style={{ display: 'flex', padding: 10, flexDirection: 'row' }} >
          <div style={{ flex: 7, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <text style={{ textAlign: 'start', fontSize: 15, color: '#0A81B9' }}>Gửi thông báo giảm giá <text style={{ fontWeight: 'bold', color: 'black' }}>5%</text> cho gói <text style={{ fontWeight: 'bold' }}>PREMIUM</text></text>
          </div>
          <div style={{ flex: 3, justifyContent: 'flex-end', display: 'flex' }}>
            <Button>Send</Button>
          </div>
        </div>
        <div style={{ borderBottomColor: '#A0ABA6', borderBottomWidth: 1, }} />
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
        <Modal title="Custom" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        </Modal>
      </CardBody>
    </Card>
  );
}
